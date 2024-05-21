import styled from "styled-components";

// Existing styled components
export const BoostMeterRing = styled.circle<{ $dashOffset: number }>`
  stroke-dashoffset: ${(props) => props.$dashOffset};
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

export const BoostMeterInnerCircle = styled.circle``;

export const BoostMeterText = styled.text`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 70px;
  text-shadow: 1px 1px 10px grey;
  z-index: 5;
`;

export const BoostMeterWrapper = styled.div`
  background-color: #0000;
  position: absolute;
  bottom: 50px;
  right: 25px;
  height: 320px;
  width: 320px;
  margin: 0px auto;
  overflow: hidden;
  transform-origin: 0 0;

  svg > circle {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
`;
