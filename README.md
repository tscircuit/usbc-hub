# USB-C 1-to-2 hub

This tscircuit project is a compact USB 2.0 High-Speed hub with one upstream USB-C receptacle and two downstream USB-C receptacles.

## Architecture

- Microchip USB2512B two-port USB 2.0 hub controller
- Hardware-strapped bus-powered configuration; no firmware or EEPROM
  (`CFG_SEL[1:0] = 10`, `NON_REM[1:0] = 00`)
- AP2112K-3.3 regulator for the hub's 3.3 V rail, with the analog `VDDA33` rail
  fed through a ferrite bead and bulk capacitance on both sides
- MIC809 push-pull reset supervisor on `RESET_N`
- AP2166S dual current-limited downstream power switch, with pull-ups on its
  open-drain fault outputs and active-low enable gating
- Two TI TUSB319-Q1 USB Type-C DFP controllers, one per downstream receptacle,
  for internal Rp, attach/orientation detection, switched-VBUS detection, and
  controlled detach discharge
- USBLC6-2SC6 low-capacitance ESD protection at all three USB connectors
- USB-C upstream `Rd` resistors (5.1 kOhm)
- TUSB319 default-current source advertisement, with 200 kOhm ID pull-ups,
  900 kOhm switched-VBUS detection resistors, and 1 kOhm controlled discharge
  paths
- 500 mA resettable input fuse
- 150 uF nominal per-port VBUS bulk capacitance and shield-to-ground RC networks
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
- Each TUSB319-Q1 is in default-current DFP mode and owns the downstream CC
  attach/orientation state. Its open-drain `ID` signal is combined with the
  USB2512B `PRTPWRx` permission through a 2N7002 so the AP2166 active-low enable
  is asserted only for an attached, permitted port. A second 2N7002 discharges
  the port VBUS through 1 kOhm whenever that enable is released.
- Default-current mode advertises 500 mA on *each* downstream port. That
  capability still has to be reconciled with the 500 mA bus-powered input and
  the two AP2166 channels before release; see `CHECKLIST.md`.
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
- The AP2166 SO-8 mapping follows the manufacturer data sheet: `ENA`,
  `FLAGA_N`, `FLAGB_N`, `ENB`, `OUTB`, `GND`, `IN`, `OUTA`; its active-low
  enables and open-drain faults connect to the Type-C gating and USB2512B.
- The TUSB319 reference design calls for at least 120 uF of downstream VBUS
  bulk; the source uses 150 uF nominal parts, but the exact voltage rating,
  DC-bias derating, inrush, and supplier footprint remain release gates.
- C_XTAL1/C_XTAL2 are 18 pF starting values for the specified 12 pF crystal load.
  Recalculate them from the selected crystal's C0 and board stray capacitance
  before release.
- Unswitched bulk on `V5_SYS` is held to 9.4 uF (4.7 uF system + 4.7 uF at the
  AP2166) so the upstream port stays inside the USB-IF 10 uF inrush limit quoted
  in DS00004539. The 500 mA upstream fuse still limits the whole bus-powered
  design, and the AP2166 per-port current limit is not an aggregate two-port
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
- [TI TUSB319-Q1 data sheet](https://www.ti.com/lit/ds/symlink/tusb319-q1.pdf)
- [KiCad HRO TYPE-C-31-M-12 footprint source](https://gitlab.com/kicad/libraries/kicad-footprints/-/raw/master/Connector_USB.pretty/USB_C_Receptacle_HRO_TYPE-C-31-M-12.kicad_mod)
