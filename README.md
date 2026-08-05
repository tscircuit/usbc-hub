# USB-C 1-to-2 hub

This tscircuit project is a compact USB 2.0 High-Speed hub with one upstream USB-C receptacle and two downstream USB-C receptacles.

## Architecture

- Microchip USB2512B two-port USB 2.0 hub controller
- Hardware-strapped bus-powered configuration; no firmware or EEPROM
- AP2112K-3.3 regulator for the hub's 3.3 V rail
- AP2176S dual current-limited downstream power switch
- USB-C upstream `Rd` resistors (5.1 kOhm)
- USB-C downstream default-current `Rp` resistors (56 kOhm)
- 500 mA resettable input fuse
- Per-port VBUS bulk capacitance and shield-to-ground RC networks
- Crystal load capacitors, AP2176 local bypass capacitors, and a bottom-layer GND copper pour
- Two-layer 68 mm x 42 mm PCB with four M3 mounting holes

## Build

```sh
npx tsci build index.circuit.tsx --disable-parts-engine \
  --pcb-svgs --schematic-svgs --pcb-png --autorouter-timeout 180s
```

Outputs are written below `dist/index/`.

The packaged deliverable includes the source, BOM, routed PCB render, schematic,
and generated circuit JSON. The autorouter output is only a connectivity
baseline; fabrication still requires a controlled-impedance layout review.

## Engineering notes

- This is a simple USB 2.0 reference design, not a USB Power Delivery hub.
- The passive downstream USB-C `Rp` implementation advertises default USB current. `PRTPWRx` only enables the AP2176 switch; it does not detect CC attach or provide VBUS discharge. A product intended for USB-IF compliance still needs a dedicated Type-C source/port controller per downstream port, with that controller owning VBUS enable.
- The source includes a bottom-layer GND pour, but the generated route remains a layout baseline. Before fabrication, reroute or tune each D+/D- pair as a 90-ohm differential pair with matched lengths for the chosen two-layer stack-up, and confirm the pour remains continuous around the high-speed paths.
- The USB2512B exposed pad is the only IC ground connection. The footprint now uses a five-via thermal array tied to the bottom GND pour; confirm the via drill, solder-mask, and paste strategy with the assembler.
- C_XTAL1/C_XTAL2 are 18 pF starting values for the specified 12 pF crystal load. Recalculate them from the selected crystal's C0 and board stray capacitance before release.
- The AP2176 now has local 10 uF input bulk plus 100 nF input/output bypass capacitors. The 500 mA upstream fuse still limits the whole bus-powered design, while the AP2176 per-port current limit is not an aggregate two-port budget; verify worst-case hub and downstream load current before fabrication.
- No external USB ESD/EMI protection is fitted yet. Add and route suitable protection at all three connectors, then recheck connector part numbers, footprint dimensions, component availability, USB inrush, thermal behavior, and USB-IF compliance.

## References

- [Microchip USB251xB/xBi data sheet, DS00001692](https://ww1.microchip.com/downloads/aemDocuments/documents/UNG/ProductDocuments/DataSheets/USB251xB-xBi-Data-Sheet-DS00001692.pdf)
- [Microchip USB2512B Hardware Design Checklist, DS00004539](https://ww1.microchip.com/downloads/aemDocuments/documents/UNG/ProductDocuments/DesignChecklist/USB2512B-Hardware-Design-Checklist-00004539.pdf)
- [KiCad HRO TYPE-C-31-M-12 footprint source](https://gitlab.com/kicad/libraries/kicad-footprints/-/raw/master/Connector_USB.pretty/USB_C_Receptacle_HRO_TYPE-C-31-M-12.kicad_mod)
