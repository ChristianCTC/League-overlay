import React, { useContext } from "react";
import { USPlayer } from "../../Models/Interfaces/US_Player";
import {
  BoostMeterBar,
  BoostMeterBarContainer,
  BoostMeterContainerLeft,
  BoostMeterContainerRight,
  BoostMeterWrapper,
  BoostNumber,
  PlayerContainer,
  PlayerContainerWrapper,
  PlayerInfoContainer,
  PlayerName,
} from "./playerBoostMeters.style";
import { GameInfoContext } from "../../contexts/GameInfo";
import { GameService } from "../../Services/Game";
import { Team1Colors, Team2Colors } from "../../Settings";

interface BoostMeterProps {
  players: USPlayer[];
}

export const BoostMeter: React.FC<BoostMeterProps> = ({ players }) => {
  const { gameInfo } = useContext(GameInfoContext);
  const { teamColors } = gameInfo;

  const blueTeamPlayers = players.filter((player) => player.team === 0);
  const orangeTeamPlayers = players.filter((player) => player.team === 1);

  const blueTeamColor = Team1Colors;
  const orangeTeamColor = Team2Colors;

  const spectatePlayer = GameService.getPlayerTarget(
    gameInfo.players,
    gameInfo.target
  );

  return (
    <BoostMeterWrapper>
      <BoostMeterContainerLeft>
        {blueTeamPlayers.map((player) => (
          <PlayerContainerWrapper key={player.id}>
            <PlayerContainer
              isSpectated={player.id === spectatePlayer?.id}
              HighlightedColor={blueTeamColor}
            >
              <PlayerInfoContainer>
                <PlayerName>{player.name}</PlayerName>
                <BoostNumber>{player.boost}</BoostNumber>
              </PlayerInfoContainer>
              <BoostMeterBarContainer>
                <BoostMeterBar
                  boost={player.boost}
                  teamColor={blueTeamColor}
                  isSpectated={player.id === spectatePlayer?.id}
                >
                  <rect
                    width={`${player.boost}%`}
                    height="100%"
                    fill={
                      player.id === spectatePlayer?.id ? "white" : blueTeamColor
                    }
                  />
                </BoostMeterBar>
              </BoostMeterBarContainer>
            </PlayerContainer>
          </PlayerContainerWrapper>
        ))}
      </BoostMeterContainerLeft>

      <BoostMeterContainerRight>
        {orangeTeamPlayers.map((player) => (
          <PlayerContainerWrapper key={player.id}>
            <PlayerContainer
              isSpectated={player.id === spectatePlayer?.id}
              HighlightedColor={orangeTeamColor}
            >
              <PlayerInfoContainer>
                <PlayerName>{player.name}</PlayerName>
                <BoostNumber>{player.boost}</BoostNumber>
              </PlayerInfoContainer>
              <BoostMeterBarContainer>
                <BoostMeterBar
                  boost={player.boost}
                  teamColor={orangeTeamColor}
                  isSpectated={player.id === spectatePlayer?.id}
                >
                  <rect
                    width={`${player.boost}%`}
                    height="100%"
                    fill={
                      player.id === spectatePlayer?.id
                        ? "white"
                        : orangeTeamColor
                    }
                  />
                </BoostMeterBar>
              </BoostMeterBarContainer>
            </PlayerContainer>
          </PlayerContainerWrapper>
        ))}
      </BoostMeterContainerRight>
    </BoostMeterWrapper>
  );
};
