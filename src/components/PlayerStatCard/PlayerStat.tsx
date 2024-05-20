import React, { useContext } from "react";
import { GameInfoContext } from "../../contexts/GameInfo";
import { GameService } from "../../Services/Game";
import {
  AnimatedStatCardWrapper,
  PlayersStatsWrapper,
  PlayerNameContainer,
  StatRow,
  StatCardWrapper,
  StatValue,
  StatName,
} from "./PlayerStat.style";
import { Team1Colors, Team2Colors } from "../../Settings";

export const PlayerStatCard = () => {
  const { gameInfo } = useContext(GameInfoContext);
  const spectatePlayer = GameService.getPlayerTarget(
    gameInfo.players,
    gameInfo.target
  );

  // Determine the spectated player's team color
  const playerTeamColor =
    spectatePlayer?.team === 0 ? Team1Colors : Team2Colors;

  return (
    <>
      {spectatePlayer && (
        <AnimatedStatCardWrapper>
          <StatCardWrapper>
            <PlayerNameContainer teamColor={playerTeamColor}>
              {spectatePlayer.name}
            </PlayerNameContainer>
            <PlayersStatsWrapper>
              <StatRow>
                <StatValue>{spectatePlayer.score}</StatValue>
                <StatValue>{spectatePlayer.goals}</StatValue>
                <StatValue>{spectatePlayer.assists}</StatValue>
                <StatValue>{spectatePlayer.saves}</StatValue>
                <StatValue>{spectatePlayer.shots}</StatValue>
              </StatRow>
              <StatRow>
                <StatName>SCORE</StatName>
                <StatName>GOALS</StatName>
                <StatName>ASSISTS</StatName>
                <StatName>SAVES</StatName>
                <StatName>SHOTS</StatName>
              </StatRow>
            </PlayersStatsWrapper>
          </StatCardWrapper>
        </AnimatedStatCardWrapper>
      )}
    </>
  );
};
