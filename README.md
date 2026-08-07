# USB-C 1-to-2 hub

This tscircuit project is a compact USB 2.0 High-Speed hub with one upstream USB-C receptacle and two downstream USB-C receptacles.

## Architecture

- Microchip USB2512B two-port USB 2.0 hub controller
- Hardware-strapped bus-powered configuration; no firmware or EEPROM
  (`CFG_SEL[1:0] = 10`, `NON_REM[1:0] = 00`)
- AP2112K-3.3 regulator for the hub's 3.3 V rail, with the analog `VDDA33` rail
  fed through a ferrite bead and bulk capacitance on both sides
- MIC809 push-pull reset supervisor on `RESET_N`
- AP2176S dual current-limited downstream power switch, with pull-ups on its
  open-drain fault outputs
- USBLC6-2SC6 low-capacitance ESD protection at all three USB connectors
- USB-C upstream `Rd` resistors (5.1 kOhm)
- USB-C downstream default-current `Rp` resistors (56 kOhm), referenced to the
  switched port VBUS
- 500 mA resettable input fuse
- Per-port VBUS bulk capacitance and shield-to-ground RC networks
- One decoupling capacitor per hub supply pin, a 0.01 uF + 0.1 uF pair on each of
  `CRFILT` and `PLLFILT`, crystal load capacitors, and a bottom-layer GND pour
- Two-layer 68 mm x 42 mm PCB with four M3 mounting holes

## Build

```sh
npx tsci build index.circuit.tsx --disable-parts-engine \
  --pcb-svgs --schematic-svgs --pcb-png --autorouter-timeout 240s
```

Outputs are written below `dist/index/`.

The packaged deliverable includes the source, BOM, routed PCB render, schematic,
and generated circuit JSON. The autorouter output is only a connectivity
baseline; fabrication still requires a controlled-impedance layout review.

## Engineering notes

- This is a simple USB 2.0 reference design, not a USB Power Delivery hub.
- The passive downstream USB-C `Rp` implementation advertises default USB current.
  `Rp` now references the switched port VBUS, so a port only advertises a source
  while the AP2176 is actually supplying one, but `PRTPWRx` still does not detect
  CC attach or provide VBUS discharge. A product intended for USB-IF compliance
  still needs a dedicated Type-C source/port controller per downstream port, with
  that controller owning VBUS enable.
- 56 kOhm advertises default USB power (500 mA) on *each* downstream port, which
  over-promises against a 500 mA bus-powered input. The advertised capability has
  to be reconciled with the power budget before release; see `CHECKLIST.md`.
- U1 is placed rotated 180 degrees so its four downstream data pins face the
  downstream receptacles and its strap pins face the strap resistors. Each
  receptacle's duplicate A/B pair pins are shorted at the connector pads and a
  single trunk runs to the hub, which keeps the A/B links to 2.7-5.0 mm instead of
  letting the router open a long branch off a 480 Mbit/s pair.
- The generated route remains a layout baseline. Before fabrication, reroute each
  D+/D- pair as a 90-ohm differential pair with matched lengths for the chosen
  two-layer stack-up, keep the pairs on the top layer so the bottom pour stays
  continuous beneath them, and confirm the pour is unbroken around the high-speed
  paths. Autorouted intra-pair skew currently lands anywhere from 0.1 mm to 5 mm
  run to run, which is why this is a manual gate.
- A `<differentialpair>` constraint cannot be attached to these nets: tscircuit
  requires a two-terminal connection and the Type-C A/B duplicates make each pair
  net three-terminal. The 90-ohm and length-match targets are therefore carried in
  `CHECKLIST.md` rather than expressed in the source.
- The USB2512B exposed pad is the only IC ground connection. The footprint uses a
  five-via thermal array tied to the bottom GND pour; confirm the via drill,
  solder-mask, and paste strategy with the assembler.
- The AP2176 SO-8 mapping follows the manufacturer data sheet: `OUTA`, `IN`,
  `OUTB`, `GND`, `FLAGA_N`, `FLAGB_N`, `ENB`, `ENA`; its active-high enables and
  open-drain faults connect to the USB2512B.
- C_XTAL1/C_XTAL2 are 18 pF starting values for the specified 12 pF crystal load.
  Recalculate them from the selected crystal's C0 and board stray capacitance
  before release.
- Unswitched bulk on `V5_SYS` is held to 9.4 uF (4.7 uF system + 4.7 uF at the
  AP2176) so the upstream port stays inside the USB-IF 10 uF inrush limit quoted
  in DS00004539. The 500 mA upstream fuse still limits the whole bus-powered
  design, and the AP2176 per-port current limit is not an aggregate two-port
  budget; verify worst-case hub and downstream load current before fabrication.
- USBLC6-2SC6 protection is now present at all three connectors, with each
  device's VBUS and GND returns connected. Final connector-to-protector
  placement, branch-free high-speed routing, SI/EMI validation, and any
  common-mode choke decision remain open.

## References

- [Microchip USB251xB/xBi data sheet, DS00001692](https://ww1.microchip.com/downloads/aemDocuments/documents/UNG/ProductDocuments/DataSheets/USB251xB-xBi-Data-Sheet-DS00001692.pdf)
- [Microchip USB2512B Hardware Design Checklist, DS00004539](https://ww1.microchip.com/downloads/aemDocuments/documents/UNG/ProductDocuments/DesignChecklist/USB2512B-Hardware-Design-Checklist-00004539.pdf)
- [Microchip MIC809/MIC810 data sheet, DS20006707](https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC809-810-Microprocessor-Reset-Circuits-DS20006707.pdf)
- [Diodes AP2166/AP2176 data sheet, DS31814](https://www.diodes.com/assets/Datasheets/AP2166_76.pdf)
- [KiCad HRO TYPE-C-31-M-12 footprint source](https://gitlab.com/kicad/libraries/kicad-footprints/-/raw/master/Connector_USB.pretty/USB_C_Receptacle_HRO_TYPE-C-31-M-12.kicad_mod)
