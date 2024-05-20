import { Team1Colors, Team2Colors } from "../Settings";
import { GameContext } from "./GameContext";
import { createContext } from "react";

export interface GameInfoContextModel {
  gameInfo: GameContext;
  setGameInfo: (newGameInfo: GameContext) => void;
}

export const DEFAULT_GAME_INFO: GameContext = {
  arena: "",
  isOT: false,
  isReplay: false,
  target: "",
  timeRemaining: 300,
  winner: "",
  winner_team_num: undefined,
  players: [],
  score: {
    blue: 0,
    orange: 0,
  },
  teamNames: {
    blue: "BLUE",
    orange: "ORANGE",
  },
  teamColors: {
    color_primary_blue: Team1Colors,
    color_primary_orange: Team2Colors,
  },
};

export const GameInfoContext = createContext<GameInfoContextModel>({
  gameInfo: DEFAULT_GAME_INFO,
  setGameInfo: (newGameInfo: GameContext) => {},
});
