import { useContext, useEffect } from "react";
import { WebsocketContext } from "../contexts/websocket";
import { GameInfoContext } from "../contexts/GameInfo";
import { UpdateState } from "../Models/Interfaces/US";
import { USPlayer } from "../Models/Interfaces/US_Player";
import { useMatchState } from "../hooks/useMatchState";

export const useGameInfo = () => {
  const websocket = useContext(WebsocketContext);
  const { setGameInfo, gameInfo } = useContext(GameInfoContext);
  const { matchEnded } = useMatchState();

  useEffect(() => {
    websocket.subscribe("game", "update_state", (data: UpdateState) => {
      const updatedPlayers: USPlayer[] = Object.values(data.players).map(
        (playerInfo: USPlayer) => playerInfo
      );

      setGameInfo({
        arena: data.game.arena,
        isOT: data.game.isOT,
        isReplay: data.game.isReplay,
        target: data.game.target,
        timeRemaining: data.game.time_seconds,
        winner: data.game.winner,
        players: updatedPlayers,
        score: {
          blue: data.game.teams[0].score,
          orange: data.game.teams[1].score,
        },
        teamNames: {
          blue: data.game.teams[0].name,
          orange: data.game.teams[1].name,
        },
        teamColors: {
          color_primary_blue: data.game.teams[0].color_primary,
          color_primary_orange: data.game.teams[1].color_primary,
        },
      });
    });
  }, [websocket, setGameInfo]);

  const blueTeamStats = {
    name: gameInfo.teamNames.blue,
    score: gameInfo.score.blue,
    players: gameInfo.players.filter((player) => player.team === 0),
  };

  const orangeTeamStats = {
    name: gameInfo.teamNames.orange,
    score: gameInfo.score.orange,
    players: gameInfo.players.filter((player) => player.team === 1),
  };

  return { matchEnded, blueTeamStats, orangeTeamStats, gameInfo };
};
