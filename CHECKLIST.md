# USB-C hub fabrication checklist

Status: **Not ready for a production fabrication order**

The current branch is a routed connectivity prototype. The items below are the
remaining release gates. A one-off bench prototype may be built only if the
known Type-C, power-budget, ESD, and signal-integrity limitations are accepted
in advance.

## Already verified

- [x] TypeScript typecheck passes.
- [x] `tsci build` completes with 141 routed traces, no jumpers, and no router errors.
- [x] Generated build DRC contains no errors or warnings, including the placement
      DRC (courtyard overlaps, board-edge and mounting-hole clearance).
- [x] `tsci check shorts index.circuit.tsx` reports no shorts.
- [x] Schematic and PCB snapshots are committed under `__snapshots__/`.
- [x] USB2512B crystal load capacitors, AP2176 local bypass capacitors, bottom GND pour, and exposed-pad thermal vias are present in the source and BOM.

## Closed against the Microchip schematic checklist (DS00004539)

These were open deviations from the vendor checklist and are now fixed in source.

- [x] `TEST` (pin 11) is tied directly to digital ground, not left floating. The
      pin carries `requiresGround`/`mustBeConnected` so DRC enforces it.
- [x] `VBUS_DET` is tied to VDD33 through a 10 kOhm series resistor, which is the
      bus-powered wiring. It was previously on the self-powered 100 k/100 k divider
      from VBUS while the part was strapped bus-powered.
- [x] `RESET_N` is driven by a MIC809 push-pull supervisor. The checklist
      explicitly does not recommend the RC circuit that was there before.
- [x] `VDDA33` is fed from `VDD33` through ferrite bead FB1, with bulk capacitance
      on both sides.
- [x] `CRFILT` and `PLLFILT` each carry a 0.01 uF bypass plus a 0.1 uF bulk
      capacitor, both placed 1.1-1.7 mm from their pin.
- [x] Unswitched bulk on `V5_SYS` reduced from 14.7 uF to 9.4 uF, inside the
      USB-IF 10 uF inrush limit the checklist quotes.
- [x] Open-drain AP2176 `FLGx` outputs have 10 kOhm pull-ups to 3.3 V, so
      `OCS_Nx` no longer reads a permanent fault.
- [x] One decoupling capacitor per hub supply pin, each on that pin's own package
      edge; worst supply-pin distance is 1.8 mm (was 8.4 mm).
- [x] `F1` current rating declares `0.5A`. `currentRating="500mA"` was parsed as
      500 A by tscircuit, so the circuit JSON and schematic both read 500 A.
      Report upstream: any SI prefix on this prop is silently dropped.
- [x] Downstream `Rp` references the switched port VBUS rather than unswitched
      `V5_SYS`, so a port no longer advertises a source with its switch off.

## Blocking electrical changes

### Downstream USB-C source control

- [ ] Select a specific Type-C source-port controller, or a combined Type-C controller and VBUS power switch, for each downstream port.
- [ ] Connect each downstream `CC1`/`CC2` pair to its controller; remove the assumption that passive 56 kOhm `Rp` resistors alone provide complete source-port control. `Rp` now references the switched port VBUS, which fixes advertising a source with no VBUS, but does not add CC attach detection or VBUS discharge.
- [ ] Reconcile the advertised current with the input budget: 56 kOhm advertises default USB power (500 mA) on *each* downstream port, against a 500 mA bus-powered input.
- [ ] Confirm the `Rp` pull-up rail stays inside the 4.75-5.5 V that the 56 kOhm value assumes; `VBUS_Px` sits behind the 500 mA PPTC and the AP2176.
- [ ] Make the Type-C controller own VBUS attach/detach behavior, including VBUS enable and controlled discharge.
- [ ] Connect `USB2512B PRTPWRx` to the controller's enable interface as appropriate. If the Type-C and power-switch functions are separate, the Type-C controller must control the power-switch enable.
- [ ] Connect the selected controller/power-switch fault output to `USB2512B OCS_Nx` with the correct polarity and open-drain behavior.
- [ ] Set the advertised Type-C current capability to match the actual system power budget.

### Power budget and protection

- [ ] Calculate worst-case input current for the USB2512B, 3.3 V regulator, both downstream ports, startup, and fault conditions.
- [ ] Decide whether this remains a bus-powered hub or becomes self-powered. Size the upstream protection and source accordingly.
- [ ] Replace the 500 mA whole-board fuse/supply assumption if the selected port capability requires more current; verify the fuse's hold/trip current, voltage rating, surge behavior, and temperature derating.
- [ ] Select per-port current limits and an aggregate protection strategy. Do not treat the dual AP2176 channel limits as an aggregate two-port budget.
- [ ] Verify VBUS inrush and bulk-capacitance limits at the upstream port and downstream ports.
- [ ] Check AP2176 switch dissipation and connector/trace temperature under sustained load and short-circuit conditions.

### USB ESD and EMI

- [ ] Select high-speed USB ESD/TVS protection for the upstream and both downstream connectors.
- [ ] Add common-mode chokes only if signal-integrity and EMI testing show they are needed; select parts with appropriate USB 2.0 capacitance.
- [ ] Place protection directly at each connector, on the same layer as the USB traces, without branch stubs.
- [ ] Route each protection device to the GND plane with the shortest practical low-impedance path.
- [ ] Recheck the shield RC network and connector shield-to-ground strategy after adding protection.

## PCB and signal-integrity review

- [ ] Choose the actual PCB manufacturer stack-up and calculate the USB 2.0 differential-pair geometry for the target impedance.
- [ ] Manually reroute and length-match every upstream and downstream D+/D− pair; do not use the current autoroute as the final high-speed layout. Autorouted intra-pair skew varies from 0.1 mm to 5 mm between runs; the target is a stated maximum (typically well under 1 mm) that the router does not honour.
- [ ] Keep all six high-speed nets on the top layer with zero vias, so the bottom pour stays continuous as their reference plane. The autorouter still drops them to the bottom layer; source cannot constrain a trace to a layer.
- [ ] Apply the 90-ohm differential target and edge-to-edge gap by hand. A `<differentialpair>` element cannot be used here: tscircuit requires a two-terminal connection and the Type-C A/B duplicates make each pair net three-terminal.
- [x] Connector A/B pad fanout stubs minimised: the duplicates are shorted at the connector pads with a bottom-layer crossover hop, giving 2.7-5.0 mm A/B links instead of the 31-49 mm branches the shared-net topology produced.
- [ ] Keep D+/D− routing symmetric through the Type-C connector transitions and any ESD parts.
- [ ] Verify the bottom GND pour is continuous below/along the USB paths and that connector grounds, ESD grounds, and the USB2512B exposed pad have low-impedance returns.
- [ ] Confirm all trace widths, clearances, via drills, annular rings, solder-mask openings, and board-edge clearances against the chosen fab and assembly rules.
- [ ] Review the USB2512B exposed-pad five-via array with the assembler, including via-in-pad filling, solder mask, paste reduction, and thermal relief requirements.
- [ ] Check connector placement, insertion direction, mounting-hole clearances, shell/mechanical keepouts, and enclosure fit.

## BOM and component release

- [ ] Replace generic BOM descriptions with exact orderable manufacturer and supplier part numbers for every component. `Y1` and `F1` are still generic; `FB1` names a candidate part whose DC current rating has not been checked against the hub's analog supply current.
- [ ] Confirm the `OCS_Nx` pull-ups are actually required. They match the AP2176 typical application circuit, but the USB251xB pin-description table was not readable in the PDFs consulted; if `OCS_Nx` has a guaranteed internal pull-up, R_OCS1/R_OCS2 can be depopulated.
- [ ] Verify the hand-rolled USB2512B land pattern against the datasheet package drawing, in particular the 3.4 x 3.4 mm exposed pad, which is an estimate and is the part's only ground connection.
- [ ] Confirm the USB2512B, Type-C controllers, power switches, regulator, fuse, connectors, and crystal are available from the intended supplier and have approved alternates.
- [ ] Confirm every resistor and capacitor's tolerance, voltage rating, dielectric, temperature rating, package, and supplier footprint.
- [ ] Select the exact 24 MHz crystal and recalculate `C_XTAL1`/`C_XTAL2` from its specified load capacitance, `C0`, ESR, drive level, and measured/estimated PCB stray capacitance.
- [ ] Verify every footprint against the selected MPN, including pin-1 orientation, pad dimensions, courtyard, paste, exposed pad, and polarity markings.
- [ ] Resolve supplier-footprint mismatch warnings from the parts engine before releasing the BOM.
- [ ] Add critical supplier part numbers to the circuit metadata where supported.

## Final validation and fabrication package

- [ ] Re-run `npm run typecheck` and the documented `tsci build` after all electrical and layout changes.
- [ ] Re-run `npx tsci check shorts index.circuit.tsx` and inspect any new shorts, clearance, placement, netlist, or trace-length findings.
- [ ] Verify schematic/netlist connectivity, power-pin requirements, reference designators, and all intentional no-connects.
- [ ] Generate and inspect Gerbers, NC drill files, board outline, and any required impedance/stack-up notes.
- [ ] Generate the final BOM and pick-and-place files from the exact released source; confirm reference designators and quantities match.
- [ ] Run a manufacturer DFM/assembly review, including panelization, fiducials, paste, solder mask, via filling, and connector assembly.
- [ ] Perform a first-article bring-up plan covering current limit, VBUS attach/detach, overcurrent response, inrush, USB enumeration, high-speed eye/throughput testing, ESD, EMI, and thermal behavior.
- [ ] Approve the release only after the Type-C source behavior, power budget, ESD/EMI protection, signal integrity, BOM, and fabrication outputs are signed off.

## References

- [Microchip USB2512B Hardware Design Checklist, DS00004539](https://ww1.microchip.com/downloads/aemDocuments/documents/UNG/ProductDocuments/DesignChecklist/USB2512B-Hardware-Design-Checklist-00004539.pdf)
- [Microchip USB251xB/xBi Data Sheet, DS00001692](https://ww1.microchip.com/downloads/aemDocuments/documents/UNG/ProductDocuments/DataSheets/USB251xB-xBi-Data-Sheet-DS00001692.pdf)
- [Diodes AP2176 product information](https://www.diodes.com/part/view/AP2176)
