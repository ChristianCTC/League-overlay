import styled from "styled-components";
import { series } from "../../Settings";

interface teamColorProps {
  teamColor: string;
  filled?: boolean;
}

//Create an array to store box components based on series length
export const BoxComponents: React.FC[] = Array.from(
  { length: series },
  (_, index) => {
    return styled.div<teamColorProps>`
      padding: 5px;
      width: 75px;
      border-radius: 10px;
      border: 2px solid black;
      background-color: ${(props) => (props.filled ? "#008000" : "#223066")};
    `;
  }
);

//Parent Controller
export const ScoreboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 110px;
  width: 1160px;
  color: #fff;
  font-family: "TitilliumWeb", sans-serif;
  background-color: #0f0f0f;
`;

export const SeriesNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 800;
  margin-top: 5px;
`;

export const ScoreboardContainerParent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  width: 100%;
  text-shadow: 2px 2px rgba(0, 0, 0, 1);
  padding: 0 10px;
`;

export const BlueTeamNameContainer = styled.div<teamColorProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 400px;
  font-size: 28px;
  font-weight: 800;
  height: 100%;
  background: linear-gradient(
    to bottom,
    ${(props) => props.teamColor || "#0083d6"} 15%,
    #272727 15%
  );
  padding-right: 10px;
`;

export const BlueTeamScoreContainer = styled.div<teamColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 900;
  height: 100%;
  width: 120px;
  background-color: ${(props) => props.teamColor};
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  font-weight: 900;
  width: 150px;
  text-shadow: none;
  background-color: #272727;
`;

export const OrangeteamScoreContainer = styled.div<teamColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 900;
  height: 100%;
  width: 120px;
  background-color: ${(props) => props.teamColor};
`;

export const OrangeTeamNameContainer = styled.div<teamColorProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 400px;
  font-size: 28px;
  font-weight: 800;
  height: 100%;
  background: linear-gradient(
    to bottom,
    ${(props) => props.teamColor || "#f97306"} 15%,
    #272727 15%
  );
  padding-left: 10px;
`;

export const SeriesContainerParent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20px;
  justify-content: center;
  align-items: center;
  background-color: #223066;
  border-radius: 0 0 10px 10px;
  border-top: 2px solid #0b0b2a;
`;

export const BestOfContainer = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;

export const BlueBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const BlueBoxComponents: React.FC<
  teamColorProps & { filled?: boolean }
>[] = Array.from({ length: Math.ceil(series / 2) }, (_, index) => {
  return styled.div<teamColorProps & { filled?: boolean }>`
    padding: 5px;
    width: 75px;
    border-radius: 10px;
    border: 2px solid black;
    background-color: ${(props) => (props.filled ? "#fff" : "#223066")};
  `;
});

export const OrangeBoxContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

export const OrangeBoxComponents: React.FC<
  teamColorProps & { filled?: boolean }
>[] = Array.from({ length: Math.ceil(series / 2) }, (_, index) => {
  return styled.div<teamColorProps & { filled?: boolean }>`
    padding: 5px;
    width: 75px;
    border-radius: 10px;
    border: 2px solid black;
    background-color: ${(props) => (props.filled ? "#fff" : "#223066")};
  `;
});
