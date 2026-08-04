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

const UsbC16 = (props: any) => (
  <connector
    {...props}
    manufacturerPartNumber="HRO-TYPE-C-31-M-12"
    pinLabels={usbC16PinLabels}
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
    noConnect={["TEST", "NC1", "NC2", "NC3", "NC4", "NC5", "NC6", "NC7", "NC8"]}
    pinAttributes={{
      VDDA33_1: { requiresPower: true, shouldHaveDecouplingCapacitor: true },
      VDDA33_2: { requiresPower: true, shouldHaveDecouplingCapacitor: true },
      VDDA33_3: { requiresPower: true, shouldHaveDecouplingCapacitor: true },
      VDDA33_4: { requiresPower: true, shouldHaveDecouplingCapacitor: true },
      VDD33_1: { requiresPower: true, shouldHaveDecouplingCapacitor: true },
      VDD33_2: { requiresPower: true, shouldHaveDecouplingCapacitor: true },
      GND_EP: { requiresGround: true, mustBeConnected: true },
      TEST: { doNotConnect: true },
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
          "NC1",
          "NC2",
          "NC3",
          "NC4",
          "TEST",
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

const Ap2176s = (props: any) => (
  <chip
    {...props}
    manufacturerPartNumber="AP2176SG-13"
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

const dataTraces = [
  ["UP_DP_A", "J_UP.DP1", "net.USB_UP_DP"],
  ["UP_DP_B", "J_UP.DP2", "net.USB_UP_DP"],
  ["UP_DM_A", "J_UP.DM1", "net.USB_UP_DM"],
  ["UP_DM_B", "J_UP.DM2", "net.USB_UP_DM"],
  ["HUB_UP_DP", "U1.USBDP_UP", "net.USB_UP_DP"],
  ["HUB_UP_DM", "U1.USBDM_UP", "net.USB_UP_DM"],

  ["P1_DP_A", "J_D1.DP1", "net.USB_P1_DP"],
  ["P1_DP_B", "J_D1.DP2", "net.USB_P1_DP"],
  ["P1_DM_A", "J_D1.DM1", "net.USB_P1_DM"],
  ["P1_DM_B", "J_D1.DM2", "net.USB_P1_DM"],
  ["HUB_P1_DP", "U1.USBDP_DN1", "net.USB_P1_DP"],
  ["HUB_P1_DM", "U1.USBDM_DN1", "net.USB_P1_DM"],

  ["P2_DP_A", "J_D2.DP1", "net.USB_P2_DP"],
  ["P2_DP_B", "J_D2.DP2", "net.USB_P2_DP"],
  ["P2_DM_A", "J_D2.DM1", "net.USB_P2_DM"],
  ["P2_DM_B", "J_D2.DM2", "net.USB_P2_DM"],
  ["HUB_P2_DP", "U1.USBDP_DN2", "net.USB_P2_DP"],
  ["HUB_P2_DM", "U1.USBDM_DN2", "net.USB_P2_DM"],
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

const groundTraces = [
  ["UP_GND_A", "J_UP.GND1", "net.GND"],
  ["UP_GND_B", "J_UP.GND2", "net.GND"],
  ["P1_GND_A", "J_D1.GND1", "net.GND"],
  ["P1_GND_B", "J_D1.GND2", "net.GND"],
  ["P2_GND_A", "J_D2.GND1", "net.GND"],
  ["P2_GND_B", "J_D2.GND2", "net.GND"],
  ["LDO_GND", "U3.GND", "net.GND"],
  ["SWITCH_GND", "U2.GND", "net.GND"],
  ["HUB_EP_GND", "U1.GND_EP", "net.GND"],
] as const

const hubPowerTraces = [
  ["HUB_VDDA1", "U1.VDDA33_1", "net.V3_3"],
  ["HUB_VDDA2", "U1.VDDA33_2", "net.V3_3"],
  ["HUB_VDDA3", "U1.VDDA33_3", "net.V3_3"],
  ["HUB_VDDA4", "U1.VDDA33_4", "net.V3_3"],
  ["HUB_VDD1", "U1.VDD33_1", "net.V3_3"],
  ["HUB_VDD2", "U1.VDD33_2", "net.V3_3"],
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
    autorouterEffortLevel="1x"
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

    <Usb2512B name="U1" pcbX={0} pcbY={0} schSectionName="Hub" schX={0} schY={0} />
    <Ap2176s name="U2" pcbX={16} pcbY={0} schSectionName="PortPower" schX={10} schY={0} />
    <Ap2112k33 name="U3" pcbX={-17} pcbY={9} schSectionName="Power" schX={-10} schY={12} />

    <fuse
      name="F1"
      currentRating="500mA"
      voltageRating="6V"
      footprint="1206"
      pcbX={-24}
      pcbY={9}
      schSectionName="Power"
      schX={-14}
      schY={12}
    />

    <crystal
      name="Y1"
      frequency="24MHz"
      loadCapacitance="12pF"
      pcbX={0}
      pcbY={6.5}
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

    <resistor name="R_CC_UP1" resistance="5.1k" footprint="0402" pcbX={-25} pcbY={-6} schSectionName="Upstream" schX={-16} schY={1} />
    <resistor name="R_CC_UP2" resistance="5.1k" footprint="0402" pcbX={-23} pcbY={-6} schSectionName="Upstream" schX={-16} schY={-1} />
    <resistor name="R_CC_D1_1" resistance="56k" footprint="0402" pcbX={20} pcbY={5} schSectionName="Output1" schX={16} schY={10} />
    <resistor name="R_CC_D1_2" resistance="56k" footprint="0402" pcbX={22} pcbY={5} schSectionName="Output1" schX={16} schY={8} />
    <resistor name="R_CC_D2_1" resistance="56k" footprint="0402" pcbX={20} pcbY={-5} schSectionName="Output2" schX={16} schY={-6} />
    <resistor name="R_CC_D2_2" resistance="56k" footprint="0402" pcbX={22} pcbY={-5} schSectionName="Output2" schX={16} schY={-8} />

    <resistor name="R_VBUS_HI" resistance="100k" footprint="0402" pcbX={-9} pcbY={7} schSectionName="Hub" schX={-7} schY={4} />
    <resistor name="R_VBUS_LO" resistance="100k" footprint="0402" pcbX={-7} pcbY={7} schSectionName="Hub" schX={-5} schY={4} />
    <resistor name="R_RBIAS" resistance="12k" footprint="0402" pcbX={-5} pcbY={-5} schSectionName="Hub" schX={-4.1} schY={-8} />
    <resistor name="R_RESET" resistance="10k" footprint="0402" pcbX={-7} pcbY={-2} schSectionName="Hub" schX={-7} schY={-4} />
    <resistor name="R_CFG0" resistance="100k" footprint="0402" pcbX={-7} pcbY={2} schSectionName="Hub" schX={-7} schY={0} />
    <resistor name="R_CFG1" resistance="10k" footprint="0402" pcbX={-7} pcbY={4} schSectionName="Hub" schX={-7} schY={-2} />
    <resistor name="R_NONREM0" resistance="100k" footprint="0402" pcbX={7} pcbY={2} schSectionName="Hub" schX={7} schY={0} />
    <resistor name="R_NONREM1" resistance="100k" footprint="0402" pcbX={7} pcbY={4} schSectionName="Hub" schX={7} schY={-2} />

    <capacitor name="C_VBUS" capacitance="4.7uF" footprint="0603" pcbX={-20} pcbY={13} schSectionName="Power" schX={-14} schY={9} schOrientation="vertical" />
    <capacitor name="C_LDO_OUT" capacitance="1uF" footprint="0603" pcbX={-13} pcbY={12} schSectionName="Power" schX={-8} schY={10} schOrientation="vertical" />
    <capacitor name="C_3V3_BULK" capacitance="1uF" footprint="0603" pcbX={-5} pcbY={9} schSectionName="Power" schX={-6} schY={12} schOrientation="vertical" />
    <capacitor name="C_VDDA1" capacitance="100nF" footprint="0402" pcbX={-4} pcbY={5} schSectionName="Hub" schX={-6} schY={8} schOrientation="vertical" />
    <capacitor name="C_VDDA2" capacitance="100nF" footprint="0402" pcbX={-2} pcbY={5} schSectionName="Hub" schX={-4} schY={8} schOrientation="vertical" />
    <capacitor name="C_VDDA3" capacitance="100nF" footprint="0402" pcbX={-4.25} pcbY={3} schSectionName="Hub" schX={-2} schY={8} schOrientation="vertical" />
    <capacitor name="C_VDDA4" capacitance="100nF" footprint="0402" pcbX={2} pcbY={5} schSectionName="Hub" schX={0} schY={8} schOrientation="vertical" />
    <capacitor name="C_VDD1" capacitance="100nF" footprint="0402" pcbX={4} pcbY={5} schSectionName="Hub" schX={2} schY={8} schOrientation="vertical" />
    <capacitor name="C_VDD2" capacitance="100nF" footprint="0402" pcbX={5} pcbY={3} schSectionName="Hub" schX={4} schY={8} schOrientation="vertical" />
    <capacitor name="C_CRFILT" capacitance="100nF" footprint="0402" pcbX={-2} pcbY={-5} schSectionName="Hub" schX={-1.9} schY={-8} schOrientation="vertical" />
    <capacitor name="C_PLLFILT" capacitance="100nF" footprint="0402" pcbX={2} pcbY={-5} schSectionName="Hub" schX={2} schY={-8} schOrientation="vertical" />
    <capacitor name="C_RESET" capacitance="1uF" footprint="0603" pcbX={-11} pcbY={-2} schSectionName="Hub" schX={-5} schY={-4} schOrientation="vertical" />
    <capacitor name="C_PORT1" capacitance="10uF" footprint="0805" pcbX={21} pcbY={9} schSectionName="Output1" schX={16} schY={6} schOrientation="vertical" />
    <capacitor name="C_PORT2" capacitance="10uF" footprint="0805" pcbX={21} pcbY={-9} schSectionName="Output2" schX={16} schY={-10} schOrientation="vertical" />

    <resistor name="R_SH_UP" resistance="1M" footprint="0402" pcbX={-24.5} pcbY={6} schSectionName="Upstream" schX={-20} schY={-5} />
    <capacitor name="C_SH_UP" capacitance="4.7nF" footprint="0402" pcbX={-23.5} pcbY={4} schSectionName="Upstream" schX={-18} schY={-5} schOrientation="vertical" />
    <resistor name="R_SH_D1" resistance="1M" footprint="0402" pcbX={23} pcbY={16} schSectionName="Output1" schX={20} schY={3} />
    <capacitor name="C_SH_D1" capacitance="4.7nF" footprint="0402" pcbX={21} pcbY={16} schSectionName="Output1" schX={18} schY={3} schOrientation="vertical" />
    <resistor name="R_SH_D2" resistance="1M" footprint="0402" pcbX={23} pcbY={-16} schSectionName="Output2" schX={20} schY={-13} />
    <capacitor name="C_SH_D2" capacitance="4.7nF" footprint="0402" pcbX={21} pcbY={-16} schSectionName="Output2" schX={18} schY={-13} schOrientation="vertical" />

    <hole name="H1" diameter="3.2mm" pcbX={-29} pcbY={16} />
    <hole name="H2" diameter="3.2mm" pcbX={15} pcbY={17} />
    <hole name="H3" diameter="3.2mm" pcbX={-29} pcbY={-16} />
    <hole name="H4" diameter="3.2mm" pcbX={15} pcbY={-17} />

    {dataTraces.map(([name, from, to]) => (
      <group key={name}>
        <trace name={name} from={from} to={to} thickness="0.18mm" />
      </group>
    ))}
    {powerTraces.map(([name, from, to]) => (
      <group key={name}>
        <trace name={name} from={from} to={to} thickness="0.8mm" />
      </group>
    ))}
    {groundTraces.map(([name, from, to]) => (
      <group key={name}>
        <trace name={name} from={from} to={to} thickness="0.15mm" />
      </group>
    ))}
    {hubPowerTraces.map(([name, from, to]) => (
      <group key={name}>
        <trace name={name} from={from} to={to} thickness="0.35mm" />
      </group>
    ))}

    <trace name="PWR_EN_A" from="U1.PRTPWR1" to="U2.ENA" thickness="0.15mm" />
    <trace name="PWR_EN_B" from="U1.PRTPWR2" to="U2.ENB" thickness="0.15mm" />
    <trace name="FAULT_A" from="U1.OCS_N1" to="U2.FLAGA_N" thickness="0.15mm" />
    <trace name="FAULT_B" from="U1.OCS_N2" to="U2.FLAGB_N" thickness="0.15mm" />

    <trace name="CC_UP1" from="J_UP.CC1" to="R_CC_UP1.pin1" />
    <trace name="CC_UP1_GND" from="R_CC_UP1.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="CC_UP2" from="J_UP.CC2" to="R_CC_UP2.pin1" />
    <trace name="CC_UP2_GND" from="R_CC_UP2.pin2" to="net.GND" thickness="0.15mm" />

    <trace name="CC_D1_1" from="J_D1.CC1" to="R_CC_D1_1.pin1" />
    <trace name="CC_D1_1_RP" from="R_CC_D1_1.pin2" to="net.V5_SYS" />
    <trace name="CC_D1_2" from="J_D1.CC2" to="R_CC_D1_2.pin1" />
    <trace name="CC_D1_2_RP" from="R_CC_D1_2.pin2" to="net.V5_SYS" />
    <trace name="CC_D2_1" from="J_D2.CC1" to="R_CC_D2_1.pin1" />
    <trace name="CC_D2_1_RP" from="R_CC_D2_1.pin2" to="net.V5_SYS" />
    <trace name="CC_D2_2" from="J_D2.CC2" to="R_CC_D2_2.pin1" />
    <trace name="CC_D2_2_RP" from="R_CC_D2_2.pin2" to="net.V5_SYS" />

    <trace name="VBUS_DIV_IN" from="R_VBUS_HI.pin1" to="net.VBUS_UP" />
    <trace name="VBUS_DIV_MID_A" from="R_VBUS_HI.pin2" to="net.VBUS_DET" />
    <trace name="VBUS_DIV_MID_B" from="U1.VBUS_DET" to="net.VBUS_DET" />
    <trace name="VBUS_DIV_GND" from="R_VBUS_LO.pin1" to="net.VBUS_DET" />
    <trace name="VBUS_DIV_GND_2" from="R_VBUS_LO.pin2" to="net.GND" thickness="0.15mm" />

    <trace name="CFG0_PIN" from="U1.CFG_SEL0" to="R_CFG0.pin1" />
    <trace name="CFG0_LOW" from="R_CFG0.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="CFG1_PIN" from="U1.CFG_SEL1" to="R_CFG1.pin1" />
    <trace name="CFG1_HIGH" from="R_CFG1.pin2" to="net.V3_3" />
    <trace name="NONREM0_PIN" from="U1.NON_REM0" to="R_NONREM0.pin1" />
    <trace name="NONREM0_LOW" from="R_NONREM0.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="NONREM1_PIN" from="U1.NON_REM1" to="R_NONREM1.pin1" />
    <trace name="NONREM1_LOW" from="R_NONREM1.pin2" to="net.GND" thickness="0.15mm" />

    <trace name="RESET_PULLUP" from="R_RESET.pin1" to="net.V3_3" />
    <trace name="RESET_NET_R" from="R_RESET.pin2" to="net.RESET_N" />
    <trace name="RESET_NET_U" from="U1.RESET_N" to="net.RESET_N" />
    <trace name="RESET_NET_C" from="C_RESET.pin1" to="net.RESET_N" />
    <trace name="RESET_C_GND" from="C_RESET.pin2" to="net.GND" thickness="0.15mm" />

    <trace name="XTAL_IN" from="U1.XTALIN" to="Y1.pin1" />
    <trace name="XTAL_OUT" from="U1.XTALOUT" to="Y1.pin2" />
    <trace name="RBIAS_PIN" from="U1.RBIAS" to="R_RBIAS.pin1" />
    <trace name="RBIAS_GND" from="R_RBIAS.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="CRFILT_PIN" from="U1.CRFILT" to="C_CRFILT.pin1" />
    <trace name="CRFILT_GND" from="C_CRFILT.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="PLLFILT_PIN" from="U1.PLLFILT" to="C_PLLFILT.pin1" />
    <trace name="PLLFILT_GND" from="C_PLLFILT.pin2" to="C_CRFILT.pin2" thickness="0.15mm" />

    {[
      "C_3V3_BULK",
      "C_VDDA1",
      "C_VDDA2",
      "C_VDDA3",
      "C_VDDA4",
      "C_VDD1",
      "C_VDD2",
    ].map((name) => (
      <group key={name}>
        <trace name={`${name}_PWR`} from={`${name}.pin1`} to="net.V3_3" />
        <trace name={`${name}_GND`} from={`${name}.pin2`} to="net.GND" thickness="0.15mm" />
      </group>
    ))}
    <trace name="VBUS_CAP_PWR" from="C_VBUS.pin1" to="net.V5_SYS" thickness="0.5mm" />
    <trace name="VBUS_CAP_GND" from="C_VBUS.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="LDO_CAP_PWR" from="C_LDO_OUT.pin1" to="net.V3_3" />
    <trace name="LDO_CAP_GND" from="C_LDO_OUT.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="P1_CAP_PWR" from="C_PORT1.pin1" to="net.VBUS_P1" thickness="0.5mm" />
    <trace name="P1_CAP_GND" from="C_PORT1.pin2" to="net.GND" thickness="0.15mm" />
    <trace name="P2_CAP_PWR" from="C_PORT2.pin1" to="net.VBUS_P2" thickness="0.5mm" />
    <trace name="P2_CAP_GND" from="C_PORT2.pin2" to="net.GND" thickness="0.15mm" />

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
        <trace name={`SH_${suffix}_C_IN`} from={`C_SH_${suffix}.pin1`} to={`net.SHIELD_${suffix}`} />
        <trace name={`SH_${suffix}_C_GND`} from={`C_SH_${suffix}.pin2`} to="net.GND" thickness="0.15mm" />
      </group>
    ))}
  </board>
)

export default UsbC12Hub
