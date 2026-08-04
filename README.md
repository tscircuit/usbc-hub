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
- Two-layer 68 mm x 42 mm PCB with four M3 mounting holes

## Build

```sh
npx tsci build index.circuit.tsx --disable-parts-engine \
  --pcb-svgs --schematic-svgs --pcb-png --autorouter-timeout 180s
```

Outputs are written below `dist/index/`.

The packaged deliverable includes the source, BOM, routed PCB render, schematic,
and generated circuit JSON. The current build completes 118 routed traces with
no jumpers or router errors; the independent routing/clearance check also
returns zero issues.

## Engineering notes

- This is a simple USB 2.0 reference design, not a USB Power Delivery hub.
- The passive downstream USB-C `Rp` implementation advertises default USB current. A product intended for USB-IF compliance should replace it with dedicated Type-C source/port controllers so VBUS is applied only after a valid CC attach.
- The included route is an autorouted connectivity draft. Before fabrication, reroute each D+/D- pair as a 90-ohm differential pair with matched lengths over a continuous ground plane and verify the impedance against the chosen PCB stack-up.
- The USB2512B exposed pad is the only IC ground connection. The footprint includes a via-in-pad fanout to the bottom layer; use the thermal-via pattern recommended by the manufacturer for a production layout.
- The 500 mA upstream fuse limits total bus-powered current; available downstream current is shared between both ports and the hub electronics.
- Recheck connector part numbers, footprint dimensions, component availability, ESD protection, USB inrush, thermal behavior, and USB-IF compliance before fabrication.

## References

- [Microchip USB251xB/xBi data sheet, DS00001692](https://ww1.microchip.com/downloads/aemDocuments/documents/UNG/ProductDocuments/DataSheets/USB251xB-xBi-Data-Sheet-DS00001692.pdf)
- [Microchip USB2512B Hardware Design Checklist, DS00004539](https://ww1.microchip.com/downloads/aemDocuments/documents/UNG/ProductDocuments/DesignChecklist/USB2512B-Hardware-Design-Checklist-00004539.pdf)
- [KiCad HRO TYPE-C-31-M-12 footprint source](https://gitlab.com/kicad/libraries/kicad-footprints/-/raw/master/Connector_USB.pretty/USB_C_Receptacle_HRO_TYPE-C-31-M-12.kicad_mod)
