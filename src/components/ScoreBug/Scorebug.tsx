import React, { useContext } from "react";
import {
  ScoreboardWrapper,
  SeriesNameContainer,
  ScoreboardContainerParent,
  BlueTeamNameContainer,
  BlueTeamScoreContainer,
  TimerContainer,
  OrangeteamScoreContainer,
  OrangeTeamNameContainer,
  SeriesContainerParent,
  BestOfContainer,
  BlueBoxComponents,
  OrangeBoxComponents,
  BlueBoxContainer,
  OrangeBoxContainer,
} from "./Scorebug.style";
import { GameInfoContext } from "../../contexts/GameInfo";
import { GameService } from "../../Services/Game";
import { tourneyName, series, Team1Colors, Team2Colors } from "../../Settings";
import { useMatchState } from "../../hooks/useMatchState";

export const Scorebug = () => {
  const { gameInfo } = useContext(GameInfoContext);

  /*        ONLY USE THIS IF YOU WANT TO USE IN-GAME ACCENTS
  const blueTeamColor = `#${gameInfo.teamColors.color_primary_blue}`;
  const orangeTeamColor = `#${gameInfo.teamColors.color_primary_orange}`;
  */

  const { matchNumber, currentMatchDisplay, blueWins, orangeWins } =
    useMatchState();

  return (
    <>
      <ScoreboardWrapper>
        <SeriesNameContainer>{tourneyName}</SeriesNameContainer>
        <ScoreboardContainerParent>
          <BlueTeamNameContainer teamColor={Team1Colors}>
            {gameInfo.teamNames.blue || "BLUE"}
          </BlueTeamNameContainer>
          <BlueTeamScoreContainer teamColor={Team1Colors}>
            {gameInfo.score.blue}
          </BlueTeamScoreContainer>
          <TimerContainer>
            {GameService.getClockFromSeconds(
              gameInfo.timeRemaining,
              gameInfo.isOT
            )}
          </TimerContainer>
          <OrangeteamScoreContainer teamColor={Team2Colors}>
            {gameInfo.score.orange}
          </OrangeteamScoreContainer>
          <OrangeTeamNameContainer teamColor={Team2Colors}>
            {gameInfo.teamNames.orange}
          </OrangeTeamNameContainer>
        </ScoreboardContainerParent>
        <SeriesContainerParent>
          <BlueBoxContainer>
            {BlueBoxComponents.map((BoxComponent, index) => (
              <BoxComponent
                key={index}
                teamColor={Team1Colors}
                filled={
                  index < blueWins ||
                  (index === blueWins - 1 && matchNumber % 2 === 0)
                }
              />
            ))}
          </BlueBoxContainer>
          <BestOfContainer>
            GAME {currentMatchDisplay} | BEST OF {series}
          </BestOfContainer>
          <OrangeBoxContainer>
            {OrangeBoxComponents.map((BoxComponent, index) => (
              <BoxComponent
                key={index}
                teamColor={Team2Colors}
                filled={
                  index < orangeWins ||
                  (index === orangeWins - 1 && matchNumber % 2 === 1)
                }
              />
            ))}
          </OrangeBoxContainer>
        </SeriesContainerParent>
      </ScoreboardWrapper>
    </>
  );
};
