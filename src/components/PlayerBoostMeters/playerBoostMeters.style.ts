import styled, { css } from "styled-components";

interface BoostMeterBarProps {
  isSpectated: boolean;
  boost: number;
  teamColor: string;
}

interface PlayerContainerProps {
  isSpectated: boolean;
  HighlightedColor: string;
}

export const BoostMeterWrapper = styled.div`
  color: white;
  display: flex;
`;

export const BoostMeterContainerLeft = styled.div`
  position: fixed;
  top: 250px;
  left: 0;
  width: 15%;
  margin-bottom: 20px;
`;

export const BoostMeterContainerRight = styled.div`
  position: fixed;
  top: 250px;
  right: 0;
  width: 15%;
  margin-bottom: 20px;
`;

export const PlayerContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const PlayerContainer = styled.div<PlayerContainerProps>`
  background-color: ${(props) =>
    props.isSpectated ? props.HighlightedColor : "#1c1c1c"};
  padding: 10px;
  margin-top: 0px;
  ${(props) => props.isSpectated && css``}
`;

export const PlayerInfoContainer = styled.div`
  font-family: "TitilliumWeb", sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PlayerName = styled.div`
  flex-grow: 1;
`;

export const BoostNumber = styled.div`
  flex-grow: 0;
`;

export const BoostMeterBarContainer = styled.div`
  position: relative;
  width: 100%;
  left: 0;
  margin-top: auto;
`;

export const BoostMeterBar = styled.svg<BoostMeterBarProps>`
  width: 100%;
  height: 10px;
  fill: ${(props) => (props.isSpectated ? "white" : props.teamColor)};
`;
