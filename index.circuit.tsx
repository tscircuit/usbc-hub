import { USBLC6_2SC6 } from "./imports/USBLC6_2SC6"

const usb2512bPinLabels = {
  pin1: ["USBDM_DN1", "D1N"],
  pin2: ["USBDP_DN1", "D1P"],
  pin3: ["USBDM_DN2", "D2N"],
  pin4: ["USBDP_DN2", "D2P"],
  pin5: ["VA1", "VDDA33_1"],
  pin6: "NC1",
  pin7: "NC2",
  pin8: "NC3",
  pin9: "NC4",
  pin10: ["VA2", "VDDA33_2"],
  pin11: "TEST",
  pin12: ["PWR1", "PRTPWR1"],
  pin13: ["OC1N", "OCS_N1"],
  pin14: "CRFILT",
  pin15: ["VD1", "VDD33_1"],
  pin16: ["PWR2", "PRTPWR2"],
  pin17: ["OC2N", "OCS_N2"],
  pin18: "NC5",
  pin19: "NC6",
  pin20: "NC7",
  pin21: "NC8",
  pin22: ["NR1", "NON_REM1"],
  pin23: ["VD2", "VDD33_2"],
  pin24: ["CFG0", "CFG_SEL0"],
  pin25: ["CFG1", "CFG_SEL1"],
  pin26: ["RST", "RESET_N"],
  pin27: ["VBDET", "VBUS_DET"],
  pin28: ["NR0", "NON_REM0"],
  pin29: ["VA3", "VDDA33_3"],
  pin30: ["USBDM_UP", "UPN"],
  pin31: ["USBDP_UP", "UPP"],
  pin32: ["XTO", "XTALOUT"],
  pin33: ["XTI", "XTALIN"],
  pin34: ["PLF", "PLLFILT"],
  pin35: ["RB", "RBIAS"],
  pin36: ["VA4", "VDDA33_4"],
  pin37: ["EP", "GND_EP"],
} as const

const usbC16PinLabels = {
  pin1: "GND1",
  pin2: "VBUS1",
  pin3: "CC1",
  pin4: "DP1",
  pin5: "DM1",
  pin6: "SBU1",
  pin7: "VBUS2",
  pin8: "GND2",
  pin9: "CC2",
  pin10: "DP2",
  pin11: "DM2",
  pin12: "SBU2",
  pin13: "SHELL1",
  pin14: "SHELL2",
  pin15: "SHELL3",
  pin16: "SHELL4",
} as const

// `standard` is metadata only - it tags the connector as USB-C in the circuit
// JSON but supplies no pinout or footprint of its own, so the explicit
// pinLabels and footprint below still carry the design.
const UsbC16 = (props: any) => (
  <connector
    {...props}
    standard="usb_c"
    manufacturerPartNumber="HRO-TYPE-C-31-M-12"
    schWidth={1.7}
    schHeight={1}
    pinLabels={usbC16PinLabels}
    schPinArrangement={{
      leftSide: {
        pins: [13, 14, 15, 16],
        direction: "top-to-bottom",
      },
      rightSide: {
        pins: [2, 7, 3, 9, 4, 10, 5, 11, 6, 12, 1, 8],
        direction: "top-to-bottom",
      },
    }}
    noConnect={["SBU1", "SBU2"]}
    footprint={
      <footprint insertionDirection="from_front">
        <hole pcbX="-2.89mm" pcbY="-2.6mm" diameter="0.65mm" />
        <hole pcbX="2.89mm" pcbY="-2.6mm" diameter="0.65mm" />

        <smtpad portHints={["pin1"]} pcbX="-3.25mm" pcbY="-4.045mm" width="0.6mm" height="1.45mm" shape="rect" rectBorderRadius="0.15mm" />
        <smtpad portHints={["pin2"]} pcbX="-2.45mm" pcbY="-4.045mm" width="0.6mm" height="1.45mm" shape="rect" rectBorderRadius="0.15mm" />
        <smtpad portHints={["pin3"]} pcbX="-1.25mm" pcbY="-4.045mm" width="0.3mm" height="1.45mm" shape="rect" rectBorderRadius="0.075mm" />
        <smtpad portHints={["pin4"]} pcbX="-0.25mm" pcbY="-4.045mm" width="0.3mm" height="1.45mm" shape="rect" rectBorderRadius="0.075mm" />
        <smtpad portHints={["pin5"]} pcbX="0.25mm" pcbY="-4.045mm" width="0.3mm" height="1.45mm" shape="rect" rectBorderRadius="0.075mm" />
        <smtpad portHints={["pin6"]} pcbX="1.25mm" pcbY="-4.045mm" width="0.3mm" height="1.45mm" shape="rect" rectBorderRadius="0.075mm" />
        <smtpad portHints={["pin7"]} pcbX="2.45mm" pcbY="-4.045mm" width="0.6mm" height="1.45mm" shape="rect" rectBorderRadius="0.15mm" />
        <smtpad portHints={["pin8"]} pcbX="3.25mm" pcbY="-4.045mm" width="0.6mm" height="1.45mm" shape="rect" rectBorderRadius="0.15mm" />
        <smtpad portHints={["pin9"]} pcbX="1.75mm" pcbY="-4.045mm" width="0.3mm" height="1.45mm" shape="rect" rectBorderRadius="0.075mm" />
        <smtpad portHints={["pin10"]} pcbX="0.75mm" pcbY="-4.045mm" width="0.3mm" height="1.45mm" shape="rect" rectBorderRadius="0.075mm" />
        <smtpad portHints={["pin11"]} pcbX="-0.75mm" pcbY="-4.045mm" width="0.3mm" height="1.45mm" shape="rect" rectBorderRadius="0.075mm" />
        <smtpad portHints={["pin12"]} pcbX="-1.75mm" pcbY="-4.045mm" width="0.3mm" height="1.45mm" shape="rect" rectBorderRadius="0.075mm" />

        <platedhole portHints={["pin13"]} pcbX="-4.32mm" pcbY="-3.13mm" shape="pill" outerWidth="1mm" outerHeight="2.1mm" holeWidth="0.6mm" holeHeight="1.7mm" />
        <platedhole portHints={["pin14"]} pcbX="-4.32mm" pcbY="1.05mm" shape="pill" outerWidth="1mm" outerHeight="1.6mm" holeWidth="0.6mm" holeHeight="1.2mm" />
        <platedhole portHints={["pin15"]} pcbX="4.32mm" pcbY="-3.13mm" shape="pill" outerWidth="1mm" outerHeight="2.1mm" holeWidth="0.6mm" holeHeight="1.7mm" />
        <platedhole portHints={["pin16"]} pcbX="4.32mm" pcbY="1.05mm" shape="pill" outerWidth="1mm" outerHeight="1.6mm" holeWidth="0.6mm" holeHeight="1.2mm" />

        <silkscreenpath route={[{ x: -4.7, y: -1.9 }, { x: -4.7, y: 0.1 }]} />
        <silkscreenpath route={[{ x: -4.7, y: 2 }, { x: -4.7, y: 3.9 }, { x: 4.7, y: 3.9 }, { x: 4.7, y: 2 }]} />
        <silkscreenpath route={[{ x: 4.7, y: 0.1 }, { x: 4.7, y: -1.9 }]} />
      </footprint>
    }
  />
)

const Usb2512B = (props: any) => (
  <chip
    {...props}
    manufacturerPartNumber="USB2512B/M2"
    schWidth={2.8}
    schHeight={3}
    pinLabels={usb2512bPinLabels}
    noConnect={["NC1", "NC2", "NC3", "NC4", "NC5", "NC6", "NC7", "NC8"]}
    pinAttributes={{
      VDDA33_1: { requiresPower: true, shouldHaveDecouplingCapacitor: true },
      VDDA33_2: { requiresPower: true, shouldHaveDecouplingCapacitor: true },
      VDDA33_3: { requiresPower: true, shouldHaveDecouplingCapacitor: true },
      VDDA33_4: { requiresPower: true, shouldHaveDecouplingCapacitor: true },
      VDD33_1: { requiresPower: true, shouldHaveDecouplingCapacitor: true },
      VDD33_2: { requiresPower: true, shouldHaveDecouplingCapacitor: true },
      GND_EP: { requiresGround: true, mustBeConnected: true },
      // DS00004539: "TEST (pin 11), this pin must be tied directly to digital
      // ground in order to ensure proper operation."
      TEST: { requiresGround: true, mustBeConnected: true },
      NC1: { doNotConnect: true },
      NC2: { doNotConnect: true },
      NC3: { doNotConnect: true },
      NC4: { doNotConnect: true },
      NC5: { doNotConnect: true },
      NC6: { doNotConnect: true },
      NC7: { doNotConnect: true },
      NC8: { doNotConnect: true },
    }}
    schPinArrangement={{
      leftSide: {
        pins: [
          "USBDM_UP",
          "USBDP_UP",
          "VBUS_DET",
          "RESET_N",
          "CFG_SEL0",
          "CFG_SEL1",
          "TEST",
          "NC1",
          "NC2",
          "NC3",
          "NC4",
        ],
        direction: "top-to-bottom",
      },
      rightSide: {
        pins: [
          "USBDM_DN1",
          "USBDP_DN1",
          "USBDM_DN2",
          "USBDP_DN2",
          "PRTPWR1",
          "OCS_N1",
          "PRTPWR2",
          "OCS_N2",
          "NC5",
          "NC6",
          "NC7",
        ],
        direction: "top-to-bottom",
      },
      topSide: {
        pins: [
          "VDDA33_1",
          "VDDA33_2",
          "VDDA33_3",
          "VDDA33_4",
          "VDD33_1",
          "VDD33_2",
          "NON_REM0",
          "NON_REM1",
        ],
        direction: "left-to-right",
      },
      bottomSide: {
        pins: [
          "XTALIN",
          "XTALOUT",
          "CRFILT",
          "PLLFILT",
          "RBIAS",
          "GND_EP",
          "NC8",
        ],
        direction: "left-to-right",
      },
    }}
    footprint={
      <footprint insertionDirection="from_above">
        {Array.from({ length: 9 }, (_, index) => (
          // @ts-expect-error React consumes key before passing SmtPadProps to tscircuit
          <smtpad key={`qfn-left-${index + 1}`}
            portHints={[`pin${index + 1}`]}
            pcbX="-2.85mm"
            pcbY={`${2 - index * 0.5}mm`}
            width="1.1mm"
            height="0.28mm"
            shape="rect"
          />
        ))}
        {Array.from({ length: 9 }, (_, index) => (
          // @ts-expect-error React consumes key before passing SmtPadProps to tscircuit
          <smtpad key={`qfn-bottom-${index + 10}`}
            portHints={[`pin${index + 10}`]}
            pcbX={`${-2 + index * 0.5}mm`}
            pcbY="-2.85mm"
            width="0.28mm"
            height="1.1mm"
            shape="rect"
          />
        ))}
        {Array.from({ length: 9 }, (_, index) => (
          // @ts-expect-error React consumes key before passing SmtPadProps to tscircuit
          <smtpad key={`qfn-right-${index + 19}`}
            portHints={[`pin${index + 19}`]}
            pcbX="2.85mm"
            pcbY={`${-2 + index * 0.5}mm`}
            width="1.1mm"
            height="0.28mm"
            shape="rect"
          />
        ))}
        {Array.from({ length: 9 }, (_, index) => (
          // @ts-expect-error React consumes key before passing SmtPadProps to tscircuit
          <smtpad key={`qfn-top-${index + 28}`}
            portHints={[`pin${index + 28}`]}
            pcbX={`${2 - index * 0.5}mm`}
            pcbY="2.85mm"
            width="0.28mm"
            height="1.1mm"
            shape="rect"
          />
        ))}
        <smtpad
          portHints={["pin37"]}
          pcbX="0mm"
          pcbY="0mm"
          width="1mm"
          height="1mm"
          shape="rect"
          layer="bottom"
        />
        <smtpad
          portHints={["pin37"]}
          pcbX="0mm"
          pcbY="0mm"
          width="3.4mm"
          height="3.4mm"
          shape="rect"
        />
        <platedhole
          portHints={["pin37"]}
          pcbX="0mm"
          pcbY="0mm"
          outerDiameter="0.6mm"
          holeDiameter="0.3mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin37"]}
          pcbX="-0.75mm"
          pcbY="-0.75mm"
          outerDiameter="0.6mm"
          holeDiameter="0.3mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin37"]}
          pcbX="-0.75mm"
          pcbY="0.75mm"
          outerDiameter="0.6mm"
          holeDiameter="0.3mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin37"]}
          pcbX="0.75mm"
          pcbY="-0.75mm"
          outerDiameter="0.6mm"
          holeDiameter="0.3mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin37"]}
          pcbX="0.75mm"
          pcbY="0.75mm"
          outerDiameter="0.6mm"
          holeDiameter="0.3mm"
          shape="circle"
        />
      </footprint>
    }
  />
)

const Ap2112k33 = (props: any) => (
  <chip
    {...props}
    manufacturerPartNumber="AP2112K-3.3TRG1"
    schHeight={0.6}
    footprint="sot23_5"
    pinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "EN",
      pin4: "NC",
      pin5: "VOUT",
    }}
    noConnect={["NC"]}
    pinAttributes={{
      VIN: { requiresPower: true },
      GND: { requiresGround: true },
      VOUT: { providesPower: true },
      NC: { doNotConnect: true },
    }}
  />
)

const Ap2166s = (props: any) => (
  <chip
    {...props}
    manufacturerPartNumber="AP2166SG-13"
    footprint="soic8"
    pinLabels={{
      pin1: "ENA",
      pin2: "FLAGA_N",
      pin3: "FLAGB_N",
      pin4: "ENB",
      pin5: "OUTB",
      pin6: "GND",
      pin7: "IN",
      pin8: "OUTA",
    }}
    pinAttributes={{
      IN: { requiresPower: true },
      GND: { requiresGround: true },
      OUTA: { providesPower: true },
      OUTB: { providesPower: true },
    }}
  />
)

// TI's TUSB319-Q1 is a production DFP-only Type-C controller. The custom
// footprint follows the 2 mm x 2 mm WSON-8 / 0.5 mm pitch DRF package and
// assigns the exposed pad to GND (pin 6) for a manufacturable thermal path.
const TUSB319Q1 = (props: any) => (
  <chip
    {...props}
    manufacturerPartNumber="TUSB319IDRFRQ1"
    supplierPartNumbers={{ jlcpcb: ["C132553"] }}
    schWidth={2.4}
    schHeight={1}
    pinLabels={{
      pin1: "CC2",
      pin2: "CURRENT_MODE",
      pin3: "VBUS_DET",
      pin4: "DIR",
      pin5: "ID",
      pin6: "GND",
      pin7: "VDD",
      pin8: "CC1",
    }}
    noConnect={["DIR"]}
    pinAttributes={{
      VDD: { requiresPower: true, shouldHaveDecouplingCapacitor: true },
      GND: { requiresGround: true, mustBeConnected: true },
      VBUS_DET: { mustBeConnected: true },
      DIR: { doNotConnect: true },
    }}
    footprint={
      <footprint insertionDirection="from_above">
        <smtpad portHints={["pin1"]} pcbX="-1.15mm" pcbY="0.75mm" width="0.7mm" height="0.25mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="-1.15mm" pcbY="0.25mm" width="0.7mm" height="0.25mm" shape="rect" />
        <smtpad portHints={["pin3"]} pcbX="-1.15mm" pcbY="-0.25mm" width="0.7mm" height="0.25mm" shape="rect" />
        <smtpad portHints={["pin4"]} pcbX="-1.15mm" pcbY="-0.75mm" width="0.7mm" height="0.25mm" shape="rect" />
        <smtpad portHints={["pin5"]} pcbX="1.15mm" pcbY="-0.75mm" width="0.7mm" height="0.25mm" shape="rect" />
        <smtpad portHints={["pin6"]} pcbX="1.15mm" pcbY="-0.25mm" width="0.7mm" height="0.25mm" shape="rect" />
        <smtpad portHints={["pin7"]} pcbX="1.15mm" pcbY="0.25mm" width="0.7mm" height="0.25mm" shape="rect" />
        <smtpad portHints={["pin8"]} pcbX="1.15mm" pcbY="0.75mm" width="0.7mm" height="0.25mm" shape="rect" />
        <smtpad portHints={["pin6"]} pcbX="0mm" pcbY="0mm" width="0.6mm" height="1.2mm" shape="rect" />
      </footprint>
    }
  />
)

// 2N7002 uses the standard SOT-23 pinout: 1=G, 2=S, 3=D. These small
// low-side/pass FETs implement the two-input enable gate and the detached-port
// VBUS discharge required by the TUSB319-Q1 application circuit.
const Nmos2N7002 = (props: any) => (
  <mosfet
    {...props}
    channelType="n"
    mosfetMode="enhancement"
    manufacturerPartNumber="2N7002"
    supplierPartNumbers={{ jlcpcb: ["C8545"] }}
    footprint={
      <footprint insertionDirection="from_above">
        <smtpad portHints={["pin1", "gate"]} pcbX="0.95mm" pcbY="-0.95mm" width="0.8mm" height="0.75mm" shape="rect" />
        <smtpad portHints={["pin2", "source"]} pcbX="0.95mm" pcbY="0.95mm" width="0.8mm" height="0.75mm" shape="rect" />
        <smtpad portHints={["pin3", "drain"]} pcbX="-0.95mm" pcbY="0mm" width="0.8mm" height="0.75mm" shape="rect" />
      </footprint>
    }
  />
)

// Push-pull, active-low reset supervisor. DS00004539 explicitly rules out an RC
// reset on RESET_N and asks for a push-pull (not open-drain) monotonic reset.
const Mic809 = (props: any) => (
  <chip
    {...props}
    manufacturerPartNumber="MIC809SUY-TR"
    schHeight={0.4}
    footprint="sot23"
    pinLabels={{
      pin1: "GND",
      pin2: "RESET_N",
      pin3: "VCC",
    }}
    pinAttributes={{
      VCC: { requiresPower: true },
      GND: { requiresGround: true },
    }}
  />
)

// Each Type-C receptacle exposes the pair twice (A6/A7 and B6/B7). Shorting the
// duplicates at the connector pads and running a single trunk to the hub keeps
// the router from opening a long branch off a 480 Mbit/s pair.
//
// A <differentialpair> constraint cannot be attached on top of this: tscircuit
// requires a two-terminal connection, and the A/B duplicates make each pair net
// three-terminal. The 90 ohm / length-match targets stay a manual-routing gate
// (see CHECKLIST.md).
//
// The A/B duplicates are physically interleaved (DM2, DP1, DM1, DP2), so each
// short has to cross the other signal. `crossX` puts that crossing on a ~1 mm
// bottom-layer hop immediately behind the receptacle instead of letting the
// router take it around the board.
const usbPairs = [
  {
    id: "UP",
    connector: "J_UP",
    dpPin: "USBDP_UP",
    dmPin: "USBDM_UP",
    dpY: [-0.25, 0.75],
    dmY: [0.25, -0.75],
    dpCrossX: -24.5,
    dmCrossX: -22.4,
  },
  {
    id: "P1",
    connector: "J_D1",
    dpPin: "USBDP_DN1",
    dmPin: "USBDM_DN1",
    dpY: [10.25, 9.25],
    dmY: [9.75, 10.75],
    dpCrossX: 24.5,
    dmCrossX: 22.4,
  },
  {
    id: "P2",
    connector: "J_D2",
    dpPin: "USBDP_DN2",
    dmPin: "USBDM_DN2",
    dpY: [-9.75, -10.75],
    dmY: [-10.25, -9.25],
    dpCrossX: 24.5,
    dmCrossX: 22.4,
  },
] as const

const powerTraces = [
  ["UP_VBUS_A", "J_UP.VBUS1", "net.VBUS_UP"],
  ["UP_VBUS_B", "J_UP.VBUS2", "net.VBUS_UP"],
  ["FUSE_IN", "F1.pin1", "net.VBUS_UP"],
  ["FUSE_OUT", "F1.pin2", "net.V5_SYS"],
  ["LDO_IN", "U3.VIN", "net.V5_SYS"],
  ["LDO_ENABLE", "U3.EN", "net.V5_SYS"],
  ["LDO_OUT", "U3.VOUT", "net.V3_3"],
  ["SWITCH_IN", "U2.IN", "net.V5_SYS"],
  ["SWITCH_OUT_A", "U2.OUTA", "net.VBUS_P1"],
  ["SWITCH_OUT_B", "U2.OUTB", "net.VBUS_P2"],
  ["PORT1_VBUS_A", "J_D1.VBUS1", "net.VBUS_P1"],
  ["PORT1_VBUS_B", "J_D1.VBUS2", "net.VBUS_P1"],
  ["PORT2_VBUS_A", "J_D2.VBUS1", "net.VBUS_P2"],
  ["PORT2_VBUS_B", "J_D2.VBUS2", "net.VBUS_P2"],
] as const

// Connector and power-stage returns carry the full VBUS current, so they get
// 0.5 mm copper rather than signal-width copper while leaving routing room for
// the Type-C control and discharge networks.
const powerGroundTraces = [
  ["UP_GND_A", "J_UP.GND1"],
  ["UP_GND_B", "J_UP.GND2"],
  ["P1_GND_A", "J_D1.GND1"],
  ["P1_GND_B", "J_D1.GND2"],
  ["P2_GND_A", "J_D2.GND1"],
  ["P2_GND_B", "J_D2.GND2"],
  ["LDO_GND", "U3.GND"],
  ["SWITCH_GND", "U2.GND"],
  ["HUB_EP_GND", "U1.GND_EP"],
] as const

// VDD33 is the digital rail; VDDA33 sits behind FB1 per DS00004539 ("connection
// to +3.3V through a ferrite bead").
const hubDigitalPowerTraces = [
  ["HUB_VDD1", "U1.VDD33_1"],
  ["HUB_VDD2", "U1.VDD33_2"],
] as const

const hubAnalogPowerTraces = [
  ["HUB_VDDA1", "U1.VDDA33_1"],
  ["HUB_VDDA2", "U1.VDDA33_2"],
  ["HUB_VDDA3", "U1.VDDA33_3"],
  ["HUB_VDDA4", "U1.VDDA33_4"],
] as const

const esdTraces = [
  ["ESD_UP_VBUS", "D_ESD_UP.VBUS", "net.VBUS_UP"],
  ["ESD_UP_GND", "D_ESD_UP.GND", "net.GND"],
  ["ESD_D1_VBUS", "D_ESD_D1.VBUS", "net.VBUS_P1"],
  ["ESD_D1_GND", "D_ESD_D1.GND", "net.GND"],
  ["ESD_D2_VBUS", "D_ESD_D2.VBUS", "net.VBUS_P2"],
  ["ESD_D2_GND", "D_ESD_D2.GND", "net.GND"],
] as const

const esdSignalTraces = [
  ["ESD_UP_DP", "J_UP.DP1", "D_ESD_UP.IO1_IN"],
  ["ESD_UP_DM", "J_UP.DM1", "D_ESD_UP.IO2_IN"],
  ["ESD_D1_DP", "J_D1.DP1", "D_ESD_D1.IO1_IN"],
  ["ESD_D1_DM", "J_D1.DM1", "D_ESD_D1.IO2_IN"],
  ["ESD_D2_DP", "J_D2.DP1", "D_ESD_D2.IO1_IN"],
  ["ESD_D2_DM", "J_D2.DM1", "D_ESD_D2.IO2_IN"],
] as const

const UsbC12Hub = () => (
  <board
    title="USB-C 1-to-2 USB 2.0 Hub"
    width="68mm"
    height="42mm"
    layers={2}
    borderRadius="2mm"
    isViaInPadAllowed
    defaultTraceWidth="0.15mm"
    autorouterEffortLevel="2x"
    autorouter={{
      preset: "auto",
      traceClearance: "0.15mm",
    }}
  >
    <schematicsection name="Upstream" displayName="Upstream USB-C" />
    <schematicsection name="Power" displayName="Input Power and 3.3 V" />
    <schematicsection name="Hub" displayName="USB 2.0 Hub Controller" />
    <schematicsection name="PortPower" displayName="Downstream Port Power" />
    <schematicsection name="Output1" displayName="Downstream USB-C Port 1" />
    <schematicsection name="Output2" displayName="Downstream USB-C Port 2" />

    <copperpour
      name="bottom_gnd_pour"
      layer="bottom"
      connectsTo="net.GND"
      padMargin="0.25mm"
      traceMargin="0.2mm"
      boardEdgeMargin="0.25mm"
    />

    <UsbC16
      name="J_UP"
      pcbX={-30}
      pcbY={0}
      pcbRotation={90}
      schSectionName="Upstream"
      schX={-20}
      schY={0}
    />
    <UsbC16
      name="J_D1"
      pcbX={30}
      pcbY={10}
      pcbRotation={270}
      schSectionName="Output1"
      schX={20}
      schY={8}
    />
    <UsbC16
      name="J_D2"
      pcbX={30}
      pcbY={-10}
      pcbRotation={270}
      schSectionName="Output2"
      schX={20}
      schY={-8}
    />

    <USBLC6_2SC6
      name="D_ESD_UP"
      pcbX={-22}
      pcbY={0}
      pcbRotation={90}
      schSectionName="Upstream"
      schX={-16}
      schY={-8}
    />
    <USBLC6_2SC6
      name="D_ESD_D1"
      pcbX={20}
      pcbY={10}
      pcbRotation={270}
      schSectionName="Output1"
      schX={17.32}
      schY={13}
    />
    <USBLC6_2SC6
      name="D_ESD_D2"
      pcbX={20}
      pcbY={-10}
      pcbRotation={270}
      schSectionName="Output2"
      schX={16.54}
      schY={-15.5}
    />

    {/*
      U1 is rotated 180 deg so the four downstream data pins (1-4) face the
      downstream receptacles and the strap pins face the strap resistors. In the
      unrotated orientation the downstream pins pointed back at the upstream
      connector, which is what forced the 35-52 mm high-speed detours.
    */}
    {/* Keep each schematic section explicitly anchored so labels and small
        passives stay separated in the rendered reference design. */}
    <Usb2512B name="U1" pcbX={0} pcbY={0} pcbRotation={180} schSectionName="Hub" schX={0} schY={0} />
    <Ap2166s name="U2" pcbX={17} pcbY={0} schSectionName="PortPower" schX={10.06} schY={0} />
    <TUSB319Q1 name="U5" pcbX={16.5} pcbY={13} pcbRotation={270} schSectionName="Output1" schX={11.75} schY={13} />
    <TUSB319Q1 name="U6" pcbX={16.5} pcbY={-13} pcbRotation={270} schSectionName="Output2" schX={11.32} schY={-13} />
    <Nmos2N7002 name="Q_EN_D1" pcbX={18.5} pcbY={16.5} pcbRotation={90} schSectionName="Output1" schX={8} schY={15} />
    <Nmos2N7002 name="Q_EN_D2" pcbX={18.5} pcbY={-16.5} pcbRotation={270} schSectionName="Output2" schX={8} schY={-15} />
    <Nmos2N7002 name="Q_DIS_D1" pcbX={20.5} pcbY={18.5} pcbRotation={90} schSectionName="Output1" schX={12} schY={17} />
    <Nmos2N7002 name="Q_DIS_D2" pcbX={20.5} pcbY={-18.5} pcbRotation={270} schSectionName="Output2" schX={12} schY={-17} />
    <Ap2112k33 name="U3" pcbX={-15} pcbY={8} schSectionName="Power" schX={-10} schY={12} />
    <Mic809 name="U4" pcbX={-8} pcbY={-1} pcbRotation={180} schSectionName="Hub" schX={-7} schY={-4} />

    <fuse
      name="F1"
      currentRating="0.5A"
      voltageRating="6V"
      footprint="1206"
      pcbX={-24}
      pcbY={8}
      schSectionName="Power"
      schX={-14}
      schY={12}
    />

    {/* Analog supply ferrite, with bulk on both sides per DS00004539. */}
    <inductor
      name="FB1"
      inductance="0"
      manufacturerPartNumber="BLM18PG601SN1D"
      footprint="0603"
      pcbX={-8}
      pcbY={4.5}
      schSectionName="Power"
      schX={-4}
      schY={12}
    />

    <crystal
      name="Y1"
      frequency="24MHz"
      loadCapacitance="12pF"
      pcbX={0.9}
      pcbY={-6.1}
      schSectionName="Hub"
      schX={0}
      schY={-10}
      footprint={
        <footprint insertionDirection="from_above">
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.1mm"
            pcbY="0mm"
            width="1.2mm"
            height="1.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="1.1mm"
            pcbY="0mm"
            width="1.2mm"
            height="1.4mm"
            shape="rect"
          />
        </footprint>
      }
    />

    <capacitor name="C_XTAL1" capacitance="18pF" footprint="0402" pcbX={-2.1} pcbY={-6.1} pcbRotation={180} schSectionName="Hub" schX={-2.5} schY={-10} schOrientation="vertical" />
    <capacitor name="C_XTAL2" capacitance="18pF" footprint="0402" pcbX={4.5} pcbY={-6.7} schSectionName="Hub" schX={2.5} schY={-10} schOrientation="vertical" />

    <resistor name="R_CC_UP1" resistance="5.1k" footprint="0402" pcbX={-23.9} pcbY={-3.2} schSectionName="Upstream" schX={-16} schY={1} />
    <resistor name="R_CC_UP2" resistance="5.1k" footprint="0402" pcbX={-23.9} pcbY={3.2} schSectionName="Upstream" schX={-16} schY={-1} />
    <resistor name="R_ID_D1" resistance="200k" footprint="0402" pcbX={12.8} pcbY={10.8} pcbRotation={90} schSectionName="Output1" schX={9.21} schY={12} />
    <resistor name="R_ID_D2" resistance="200k" footprint="0402" pcbX={12.8} pcbY={-10.8} pcbRotation={270} schSectionName="Output2" schX={8.78} schY={-12} />
    <resistor name="R_EN_D1" resistance="200k" footprint="0402" pcbX={21} pcbY={14.5} pcbRotation={90} schSectionName="Output1" schX={19.5} schY={14} />
    <resistor name="R_EN_D2" resistance="200k" footprint="0402" pcbX={21} pcbY={-14.5} pcbRotation={270} schSectionName="Output2" schX={18.5} schY={-14} />
    <resistor name="R_VBUS_D1" resistance="900k" footprint="0402" pcbX={14.2} pcbY={10.8} pcbRotation={90} schSectionName="Output1" schX={20} schY={12} />
    <resistor name="R_VBUS_D2" resistance="900k" footprint="0402" pcbX={14.2} pcbY={-10.8} pcbRotation={270} schSectionName="Output2" schX={20} schY={-12} />
    <resistor name="R_DIS_D1" resistance="1k" footprint="0402" pcbX={26.2} pcbY={19} pcbRotation={90} schSectionName="Output1" schX={16} schY={17} />
    <resistor name="R_DIS_D2" resistance="1k" footprint="0402" pcbX={26.2} pcbY={-19} pcbRotation={270} schSectionName="Output2" schX={16} schY={-17} />

    {/* Bus-powered mode: VBUS_DET is tied to VDD33 through a series resistor
        (DS00004539 allows 820 ohm - 10 kohm), not to a divider off VBUS. */}
    <resistor name="R_VBUS_DET" resistance="10k" footprint="0402" pcbX={-4.6} pcbY={-4.5} schSectionName="Hub" schX={-7} schY={4} />
    <resistor name="R_RBIAS" resistance="12k" footprint="0402" pcbX={4.8} pcbY={-5} pcbRotation={270} schSectionName="Hub" schX={-4.1} schY={-8} />
    <resistor name="R_CFG0" resistance="100k" footprint="0402" pcbX={-4.6} pcbY={-1.9} pcbRotation={180} schSectionName="Hub" schX={-7} schY={0} />
    <resistor name="R_CFG1" resistance="10k" footprint="0402" pcbX={-4.6} pcbY={-3.2} pcbRotation={180} schSectionName="Hub" schX={-7} schY={-2} />
    <resistor name="R_NONREM0" resistance="100k" footprint="0402" pcbX={-4.6} pcbY={-5.6} pcbRotation={180} schSectionName="Hub" schX={6.94} schY={0} />
    <resistor name="R_NONREM1" resistance="100k" footprint="0402" pcbX={-4.6} pcbY={1.7} pcbRotation={180} schSectionName="Hub" schX={6.75} schY={-2} />

    {/* AP2166 FLGx are open-drain (DS31814 Fig. "Typical Applications Circuit"
        shows 10 k pull-ups); OCS_Nx would otherwise read a permanent fault. */}
    <resistor name="R_OCS1" resistance="10k" footprint="0402" pcbX={1.6} pcbY={6.7} pcbRotation={90} schSectionName="PortPower" schX={5} schY={3} />
    <resistor name="R_OCS2" resistance="10k" footprint="0402" pcbX={3} pcbY={6.7} pcbRotation={90} schSectionName="PortPower" schX={5} schY={-3} />

    {/* Unswitched bulk on V5_SYS is held to 9.4 uF so the upstream port stays
        inside the USB-IF 10 uF inrush limit quoted in DS00004539. */}
    <capacitor name="C_VBUS" capacitance="4.7uF" footprint="0603" pcbX={-19.1} pcbY={8.95} pcbRotation={180} schSectionName="Power" schX={-14} schY={9} schOrientation="vertical" />
    <capacitor name="C_LDO_OUT" capacitance="1uF" footprint="0603" pcbX={-11.1} pcbY={8.95} schSectionName="Power" schX={-8} schY={10} schOrientation="vertical" />
    <capacitor name="C_3V3_BULK" capacitance="1uF" footprint="0603" pcbX={-11.5} pcbY={4.5} pcbRotation={180} schSectionName="Power" schX={-6} schY={12} schOrientation="vertical" />
    <capacitor name="C_3V3A_BULK" capacitance="1uF" footprint="0603" pcbX={-4.8} pcbY={4.5} schSectionName="Power" schX={-2} schY={12} schOrientation="vertical" />

    {/* One decoupling capacitor per supply pin, on the pin's own edge. */}
    <capacitor name="C_VDDA1" capacitance="100nF" footprint="0402" pcbX={4.9} pcbY={1.3} schSectionName="Hub" schX={-6} schY={8} schOrientation="vertical" />
    <capacitor name="C_VDDA2" capacitance="100nF" footprint="0402" pcbX={2} pcbY={4.6} pcbRotation={90} schSectionName="Hub" schX={-4} schY={8} schOrientation="vertical" />
    <capacitor name="C_VDDA3" capacitance="100nF" footprint="0402" pcbX={-2.4} pcbY={-4.5} pcbRotation={270} schSectionName="Hub" schX={-2} schY={8} schOrientation="vertical" />
    <capacitor name="C_VDDA4" capacitance="100nF" footprint="0402" pcbX={2.2} pcbY={-4.5} pcbRotation={270} schSectionName="Hub" schX={0} schY={8} schOrientation="vertical" />
    <capacitor name="C_VDD1" capacitance="100nF" footprint="0402" pcbX={-1.9} pcbY={4.6} pcbRotation={90} schSectionName="Hub" schX={2} schY={8} schOrientation="vertical" />
    <capacitor name="C_VDD2" capacitance="100nF" footprint="0402" pcbX={-4.6} pcbY={0} pcbRotation={180} schSectionName="Hub" schX={4} schY={8} schOrientation="vertical" />

    {/* DS00004539 wants both a 0.01 uF bypass and a >=0.1 uF low-ESR bulk on
        CRFILT and PLLFILT, each as close to the pin as possible. */}
    <capacitor name="C_CRFILT_HF" capacitance="10nF" footprint="0402" pcbX={0} pcbY={4.6} pcbRotation={90} schSectionName="Hub" schX={-1.9} schY={-6} schOrientation="vertical" />
    <capacitor name="C_CRFILT" capacitance="100nF" footprint="0402" pcbX={0} pcbY={6.7} pcbRotation={90} schSectionName="Hub" schX={-1.9} schY={-8} schOrientation="vertical" />
    <capacitor name="C_PLLFILT_HF" capacitance="10nF" footprint="0402" pcbX={0.9} pcbY={-5} pcbRotation={270} schSectionName="Hub" schX={2} schY={-6} schOrientation="vertical" />
    <capacitor name="C_PLLFILT" capacitance="100nF" footprint="0402" pcbX={3.5} pcbY={-5} pcbRotation={270} schSectionName="Hub" schX={2} schY={-8} schOrientation="vertical" />

    <capacitor name="C_U4" capacitance="100nF" footprint="0402" pcbX={-12} pcbY={-1} pcbRotation={180} schSectionName="Hub" schX={-5} schY={-4} schOrientation="vertical" />

    {/* TI's TUSB319-Q1 DFP reference design calls for at least 120 uF of
        downstream VBUS bulk. 150 uF is the nominal target; voltage rating,
        DC-bias derating, and inrush still need a final supplier-qualified part. */}
    <capacitor name="C_PORT1" capacitance="150uF" footprint="1210" pcbX={23.8} pcbY={17.5} pcbRotation={90} schSectionName="Output1" schX={16} schY={6} schOrientation="vertical" />
    <capacitor name="C_PORT2" capacitance="150uF" footprint="1210" pcbX={23.8} pcbY={-17.5} pcbRotation={270} schSectionName="Output2" schX={16} schY={-10} schOrientation="vertical" />
    <capacitor name="C_TC_D1" capacitance="100nF" footprint="0402" pcbX={14.1} pcbY={13.8} pcbRotation={90} schSectionName="Output1" schX={9.71} schY={11} schOrientation="vertical" />
    <capacitor name="C_TC_D2" capacitance="100nF" footprint="0402" pcbX={14.1} pcbY={-13.8} pcbRotation={270} schSectionName="Output2" schX={10} schY={-11} schOrientation="vertical" />
    <capacitor name="C_U2_IN_BULK" capacitance="4.7uF" footprint="0805" pcbX={21.6} pcbY={3.6} schSectionName="PortPower" schX={7.25} schY={-3} schOrientation="vertical" />
    <capacitor name="C_U2_IN" capacitance="100nF" footprint="0402" pcbX={21.4} pcbY={0.635} schSectionName="PortPower" schX={7} schY={3} schOrientation="vertical" />
    <capacitor name="C_U2_OUTA" capacitance="100nF" footprint="0402" pcbX={21} pcbY={1.905} schSectionName="PortPower" schX={13} schY={3} schOrientation="vertical" />
    <capacitor name="C_U2_OUTB" capacitance="100nF" footprint="0402" pcbX={21} pcbY={-1.905} schSectionName="PortPower" schX={13} schY={-3} schOrientation="vertical" />

    <resistor name="R_SH_UP" resistance="1M" footprint="0402" pcbX={-23.9} pcbY={-4.32} schSectionName="Upstream" schX={-20} schY={-5} />
    <capacitor name="C_SH_UP" capacitance="4.7nF" footprint="0402" pcbX={-21.8} pcbY={-4.32} schSectionName="Upstream" schX={-18} schY={-5} schOrientation="vertical" />
    <resistor name="R_SH_D1" resistance="1M" footprint="0402" pcbX={23.9} pcbY={5.68} pcbRotation={180} schSectionName="Output1" schX={20} schY={3} />
    <capacitor name="C_SH_D1" capacitance="4.7nF" footprint="0402" pcbX={24.8} pcbY={4} pcbRotation={180} schSectionName="Output1" schX={18} schY={3} schOrientation="vertical" />
    <resistor name="R_SH_D2" resistance="1M" footprint="0402" pcbX={23.9} pcbY={-5.68} pcbRotation={180} schSectionName="Output2" schX={20.76} schY={-13} />
    <capacitor name="C_SH_D2" capacitance="4.7nF" footprint="0402" pcbX={24.8} pcbY={-4} pcbRotation={180} schSectionName="Output2" schX={18.61} schY={-13} schOrientation="vertical" />

    <hole name="H1" diameter="3.2mm" pcbX={-29} pcbY={16} />
    <hole name="H2" diameter="3.2mm" pcbX={15} pcbY={17} />
    <hole name="H3" diameter="3.2mm" pcbX={-29} pcbY={-16} />
    <hole name="H4" diameter="3.2mm" pcbX={15} pcbY={-17} />

    {usbPairs.map(({ id, connector, dpPin, dmPin, dpY, dmY, dpCrossX, dmCrossX }) => (
      <group key={`pair-${id}`}>
        <trace
          name={`${id}_DP_AB`}
          from={`${connector}.DP1`}
          to={`${connector}.DP2`}
          thickness="0.18mm"
          pcbRouteHints={[
            { x: dpCrossX, y: dpY[0], via: true },
            { x: dpCrossX, y: (dpY[0] + dpY[1]) / 2 },
            { x: dpCrossX, y: dpY[1], via: true },
          ]}
        />
        <trace
          name={`${id}_DM_AB`}
          from={`${connector}.DM1`}
          to={`${connector}.DM2`}
          thickness="0.18mm"
          pcbRouteHints={[
            { x: dmCrossX, y: dmY[0], via: true },
            { x: dmCrossX, y: (dmY[0] + dmY[1]) / 2 },
            { x: dmCrossX, y: dmY[1], via: true },
          ]}
        />
        <trace name={`${id}_DP`} from={`${connector}.DP1`} to={`U1.${dpPin}`} thickness="0.18mm" />
        <trace name={`${id}_DM`} from={`${connector}.DM1`} to={`U1.${dmPin}`} thickness="0.18mm" />
      </group>
    ))}

    {esdSignalTraces.map(([name, from, to]) => (
      <group key={name}>
        <trace name={name} from={from} to={to} thickness="0.18mm" />
      </group>
    ))}

    {esdTraces.map(([name, from, to]) => (
      <group key={name}>
        <trace
          name={name}
          from={from}
          to={to}
          thickness={name.endsWith("VBUS") ? "0.5mm" : "0.15mm"}
        />
      </group>
    ))}

    {powerTraces.map(([name, from, to]) => (
      <group key={name}>
        <trace name={name} from={from} to={to} thickness="0.5mm" />
      </group>
    ))}
    {powerGroundTraces.map(([name, from]) => (
      <group key={name}>
        <trace name={name} from={from} to="net.GND" thickness="0.5mm" />
      </group>
    ))}
    {hubDigitalPowerTraces.map(([name, from]) => (
      <group key={name}>
        <trace name={name} from={from} to="net.V3_3" thickness="0.35mm" />
      </group>
    ))}
    {hubAnalogPowerTraces.map(([name, from]) => (
      <group key={name}>
        <trace name={name} from={from} to="net.V3_3A" thickness="0.35mm" />
      </group>
    ))}

    <trace name="FERRITE_IN" from="FB1.pin1" to="net.V3_3" thickness="0.35mm" />
    <trace name="FERRITE_OUT" from="FB1.pin2" to="net.V3_3A" thickness="0.35mm" />
    <trace name="A3V3_BULK_PWR" from="C_3V3A_BULK.pin1" to="net.V3_3A" thickness="0.35mm" />
    <trace name="A3V3_BULK_GND" from="C_3V3A_BULK.pin2" to="net.GND" thickness="0.15mm" />

    {/* TEST must be grounded, not floating. */}
    <trace name="TEST_GND" from="U1.TEST" to="net.GND" thickness="0.15mm" />

    {/* The USB2512B still owns the port-power permission. A 2N7002 passes the
        TUSB319-Q1 open-drain attach-low signal to the AP2166 only while the
        hub asserts PRTPWRx. AP2166 is active-low, so the shared EN net is low
        exactly when both conditions are true. */}
    <trace name="PWR_GATE_A" from="U1.PRTPWR1" to="Q_EN_D1.gate" thickness="0.15mm" />
    <trace name="PWR_GATE_B" from="U1.PRTPWR2" to="Q_EN_D2.gate" thickness="0.15mm" />
    <trace name="TC_ID_A" from="U5.ID" to="net.TC_ID_D1" thickness="0.15mm" />
    <trace name="TC_ID_B" from="U6.ID" to="net.TC_ID_D2" thickness="0.15mm" />
    <trace name="TC_ID_A_PU" from="R_ID_D1.pin1" to="net.TC_ID_D1" thickness="0.15mm" />
    <trace name="TC_ID_B_PU" from="R_ID_D2.pin1" to="net.TC_ID_D2" thickness="0.15mm" />
    <trace name="TC_ID_A_PU_PWR" from="R_ID_D1.pin2" to="net.V5_SYS" thickness="0.15mm" />
    <trace name="TC_ID_B_PU_PWR" from="R_ID_D2.pin2" to="net.V5_SYS" thickness="0.15mm" />
    <trace name="TC_ID_A_TO_GATE" from="Q_EN_D1.source" to="net.TC_ID_D1" thickness="0.15mm" />
    <trace name="TC_ID_B_TO_GATE" from="Q_EN_D2.source" to="net.TC_ID_D2" thickness="0.15mm" />
    <trace name="EN_A" from="Q_EN_D1.drain" to="U2.ENA" thickness="0.15mm" />
    <trace name="EN_B" from="Q_EN_D2.drain" to="U2.ENB" thickness="0.15mm" />
    <trace name="EN_A_PU" from="R_EN_D1.pin1" to="U2.ENA" thickness="0.15mm" />
    <trace name="EN_B_PU" from="R_EN_D2.pin1" to="U2.ENB" thickness="0.15mm" />
    <trace name="EN_A_PU_PWR" from="R_EN_D1.pin2" to="net.V5_SYS" thickness="0.15mm" />
    <trace name="EN_B_PU_PWR" from="R_EN_D2.pin2" to="net.V5_SYS" thickness="0.15mm" />
    <trace name="VBUS_DIS_A_GATE" from="Q_DIS_D1.gate" to="U2.ENA" thickness="0.15mm" />
    <trace name="VBUS_DIS_B_GATE" from="Q_DIS_D2.gate" to="U2.ENB" thickness="0.15mm" />
    <trace name="VBUS_DIS_A_SOURCE" from="Q_DIS_D1.source" to="net.GND" thickness="0.15mm" />
    <trace name="VBUS_DIS_B_SOURCE" from="Q_DIS_D2.source" to="net.GND" thickness="0.15mm" />
    <trace name="VBUS_DIS_A_RES" from="R_DIS_D1.pin2" to="Q_DIS_D1.drain" thickness="0.15mm" />
    <trace name="VBUS_DIS_B_RES" from="R_DIS_D2.pin2" to="Q_DIS_D2.drain" thickness="0.15mm" />
    <trace name="VBUS_DIS_A_PWR" from="R_DIS_D1.pin1" to="net.VBUS_P1" thickness="0.5mm" />
    <trace name="VBUS_DIS_B_PWR" from="R_DIS_D2.pin1" to="net.VBUS_P2" thickness="0.5mm" />

    <trace name="FAULT_A_HUB" from="U1.OCS_N1" to="net.OCS_N1" thickness="0.15mm" />
    <trace name="FAULT_A_SW" from="U2.FLAGA_N" to="net.OCS_N1" thickness="0.15mm" />
    <trace name="FAULT_A_PU" from="R_OCS1.pin2" to="net.OCS_N1" thickness="0.15mm" />
    <trace name="FAULT_A_PU_3V3" from="R_OCS1.pin1" to="net.V3_3" />
    <trace name="FAULT_B_HUB" from="U1.OCS_N2" to="net.OCS_N2" thickness="0.15mm" />
    <trace name="FAULT_B_SW" from="U2.FLAGB_N" to="net.OCS_N2" thickness="0.15mm" />
    <trace name="FAULT_B_PU" from="R_OCS2.pin2" to="net.OCS_N2" thickness="0.15mm" />
    <trace name="FAULT_B_PU_3V3" from="R_OCS2.pin1" to="net.V3_3" />

    <trace name="CC_UP1" from="J_UP.CC1" to="R_CC_UP1.pin1" />
    <trace name="CC_UP1_GND" from="R_CC_UP1.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="CC_UP2" from="J_UP.CC2" to="R_CC_UP2.pin1" />
    <trace name="CC_UP2_GND" from="R_CC_UP2.pin2" to="net.GND" thickness="0.15mm" />

    {/* The dedicated DFP controllers now generate the internal Rp and perform
        attach/orientation detection; there are no passive 56 kΩ CC straps. */}
    <trace name="TUSB_D1_CC1" from="U5.CC1" to="J_D1.CC1" />
    <trace name="TUSB_D1_CC2" from="U5.CC2" to="J_D1.CC2" />
    <trace name="TUSB_D2_CC1" from="U6.CC1" to="J_D2.CC1" />
    <trace name="TUSB_D2_CC2" from="U6.CC2" to="J_D2.CC2" />
    <trace name="TUSB_D1_CURRENT_DEFAULT" from="U5.CURRENT_MODE" to="net.GND" thickness="0.15mm" />
    <trace name="TUSB_D2_CURRENT_DEFAULT" from="U6.CURRENT_MODE" to="net.GND" thickness="0.15mm" />
    <trace name="TUSB_D1_VDD" from="U5.VDD" to="net.V5_SYS" thickness="0.25mm" />
    <trace name="TUSB_D2_VDD" from="U6.VDD" to="net.V5_SYS" thickness="0.25mm" />
    <trace name="TUSB_D1_GND" from="U5.GND" to="net.GND" thickness="0.15mm" />
    <trace name="TUSB_D2_GND" from="U6.GND" to="net.GND" thickness="0.15mm" />
    <trace name="TUSB_D1_VBUS_DET_R" from="R_VBUS_D1.pin2" to="U5.VBUS_DET" thickness="0.15mm" />
    <trace name="TUSB_D2_VBUS_DET_R" from="R_VBUS_D2.pin2" to="U6.VBUS_DET" thickness="0.15mm" />
    <trace name="TUSB_D1_VBUS_DET" from="R_VBUS_D1.pin1" to="net.VBUS_P1" thickness="0.15mm" />
    <trace name="TUSB_D2_VBUS_DET" from="R_VBUS_D2.pin1" to="net.VBUS_P2" thickness="0.15mm" />

    <trace name="VBUS_DET_PULLUP" from="R_VBUS_DET.pin1" to="net.V3_3" />
    <trace name="VBUS_DET_PIN" from="R_VBUS_DET.pin2" to="U1.VBUS_DET" />

    <trace name="CFG0_PIN" from="U1.CFG_SEL0" to="R_CFG0.pin1" />
    <trace name="CFG0_LOW" from="R_CFG0.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="CFG1_PIN" from="U1.CFG_SEL1" to="R_CFG1.pin1" />
    <trace name="CFG1_HIGH" from="R_CFG1.pin2" to="net.V3_3" />
    <trace name="NONREM0_PIN" from="U1.NON_REM0" to="R_NONREM0.pin1" />
    <trace name="NONREM0_LOW" from="R_NONREM0.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="NONREM1_PIN" from="U1.NON_REM1" to="R_NONREM1.pin1" />
    <trace name="NONREM1_LOW" from="R_NONREM1.pin2" to="net.GND" thickness="0.15mm" />

    <trace name="RESET_SUP_OUT" from="U4.RESET_N" to="net.RESET_N" />
    <trace name="RESET_NET_U" from="U1.RESET_N" to="net.RESET_N" />
    <trace name="RESET_SUP_VCC" from="U4.VCC" to="net.V3_3" />
    <trace name="RESET_SUP_GND" from="U4.GND" to="net.GND" thickness="0.15mm" />
    <trace name="RESET_SUP_CAP" from="C_U4.pin1" to="net.V3_3" />
    <trace name="RESET_SUP_CAP_GND" from="C_U4.pin2" to="net.GND" thickness="0.15mm" />

    <trace name="XTAL_OUT" from="U1.XTALOUT" to="Y1.pin1" />
    <trace name="XTAL_OUT_C" from="C_XTAL1.pin1" to="Y1.pin1" />
    <trace name="XTAL_OUT_C_GND" from="C_XTAL1.pin2" to="net.GND" thickness="0.15mm" />
    <trace
      name="XTAL_IN"
      from="U1.XTALIN"
      to="Y1.pin2"
      pcbRouteHints={[
        { x: 0.5, y: -3.8 },
        { x: 1.1, y: -4.4 },
        { x: 1.1, y: -5.9 },
        { x: 2, y: -6.1 },
      ]}
    />
    <trace name="XTAL_IN_C" from="C_XTAL2.pin1" to="Y1.pin2" />
    <trace name="XTAL_IN_C_GND" from="C_XTAL2.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="RBIAS_PIN" from="U1.RBIAS" to="R_RBIAS.pin1" />
    <trace name="RBIAS_GND" from="R_RBIAS.pin2" to="net.GND" thickness="0.15mm" />

    {[
      ["CRFILT", "C_CRFILT_HF", "C_CRFILT"],
      ["PLLFILT", "C_PLLFILT_HF", "C_PLLFILT"],
    ].map(([pin, hfCap, bulkCap]) => (
      <group key={`filt-${pin}`}>
        <trace name={`${pin}_HF`} from={`U1.${pin}`} to={`${hfCap}.pin1`} />
        <trace name={`${pin}_HF_GND`} from={`${hfCap}.pin2`} to="net.GND" thickness="0.15mm" />
        <trace name={`${pin}_BULK`} from={`U1.${pin}`} to={`${bulkCap}.pin1`} />
        <trace name={`${pin}_BULK_GND`} from={`${bulkCap}.pin2`} to={`${hfCap}.pin2`} thickness="0.15mm" />
      </group>
    ))}

    {[
      "C_3V3_BULK",
      "C_VDD1",
      "C_VDD2",
    ].map((name) => (
      <group key={name}>
        <trace name={`${name}_PWR`} from={`${name}.pin1`} to="net.V3_3" />
        <trace name={`${name}_GND`} from={`${name}.pin2`} to="net.GND" thickness="0.15mm" />
      </group>
    ))}
    {[
      "C_VDDA1",
      "C_VDDA2",
      "C_VDDA3",
      "C_VDDA4",
    ].map((name) => (
      <group key={name}>
        <trace name={`${name}_PWR`} from={`${name}.pin1`} to="net.V3_3A" />
        <trace name={`${name}_GND`} from={`${name}.pin2`} to="net.GND" thickness="0.15mm" />
      </group>
    ))}

    <trace name="VBUS_CAP_PWR" from="C_VBUS.pin1" to="net.V5_SYS" thickness="0.5mm" />
    <trace name="VBUS_CAP_GND" from="C_VBUS.pin2" to="net.GND" thickness="0.5mm" />
    <trace name="LDO_CAP_PWR" from="C_LDO_OUT.pin1" to="net.V3_3" />
    <trace name="LDO_CAP_GND" from="C_LDO_OUT.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="P1_CAP_PWR" from="C_PORT1.pin1" to="net.VBUS_P1" thickness="0.5mm" />
    <trace name="P1_CAP_GND" from="C_PORT1.pin2" to="net.GND" thickness="0.5mm" />
    <trace name="P2_CAP_PWR" from="C_PORT2.pin1" to="net.VBUS_P2" thickness="0.5mm" />
    <trace name="P2_CAP_GND" from="C_PORT2.pin2" to="net.GND" thickness="0.5mm" />
    <trace name="TC_D1_BYPASS_PWR" from="C_TC_D1.pin1" to="net.V5_SYS" thickness="0.15mm" />
    <trace name="TC_D1_BYPASS_GND" from="C_TC_D1.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="TC_D2_BYPASS_PWR" from="C_TC_D2.pin1" to="net.V5_SYS" thickness="0.15mm" />
    <trace name="TC_D2_BYPASS_GND" from="C_TC_D2.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="U2_IN_BULK_PWR" from="C_U2_IN_BULK.pin1" to="net.V5_SYS" thickness="0.5mm" />
    <trace name="U2_IN_BULK_GND" from="C_U2_IN_BULK.pin2" to="net.GND" thickness="0.5mm" />
    <trace name="U2_IN_BYPASS_PWR" from="C_U2_IN.pin1" to="net.V5_SYS" />
    <trace name="U2_IN_BYPASS_GND" from="C_U2_IN.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="U2_OUTA_BYPASS_PWR" from="C_U2_OUTA.pin1" to="net.VBUS_P1" />
    <trace name="U2_OUTA_BYPASS_GND" from="C_U2_OUTA.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="U2_OUTB_BYPASS_PWR" from="C_U2_OUTB.pin1" to="net.VBUS_P2" />
    <trace name="U2_OUTB_BYPASS_GND" from="C_U2_OUTB.pin2" to="net.GND" thickness="0.15mm" />

    {[
      ["UP", "J_UP"],
      ["D1", "J_D1"],
      ["D2", "J_D2"],
    ].map(([suffix, connector]) => (
      <group key={`shield-${suffix}`}>
        <trace name={`SH_${suffix}_1`} from={`${connector}.SHELL1`} to={`net.SHIELD_${suffix}`} />
        <trace name={`SH_${suffix}_2`} from={`${connector}.SHELL2`} to={`net.SHIELD_${suffix}`} />
        <trace name={`SH_${suffix}_3`} from={`${connector}.SHELL3`} to={`net.SHIELD_${suffix}`} />
        <trace name={`SH_${suffix}_4`} from={`${connector}.SHELL4`} to={`net.SHIELD_${suffix}`} />
        <trace name={`SH_${suffix}_R_IN`} from={`R_SH_${suffix}.pin1`} to={`net.SHIELD_${suffix}`} />
        <trace name={`SH_${suffix}_R_GND`} from={`R_SH_${suffix}.pin2`} to="net.GND" thickness="0.15mm" />
        <trace name={`SH_${suffix}_C_IN`} from={`C_SH_${suffix}.pin1`} to={`R_SH_${suffix}.pin1`} />
        <trace name={`SH_${suffix}_C_GND`} from={`C_SH_${suffix}.pin2`} to={`R_SH_${suffix}.pin2`} thickness="0.15mm" />
      </group>
    ))}
  </board>
)

export default UsbC12Hub
