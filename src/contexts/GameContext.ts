import { USPlayer } from "../Models/Interfaces/US_Player";

export interface GameContext {
  arena: string;
  isOT: boolean;
  isReplay: boolean; //is this a replay
  target: string; //who we are spectating
  timeRemaining: number; //in seconds
  winner: string;
  winner_team_num?: number;
  players: USPlayer[];
  score: {
    blue: number;
    orange: number;
  };
  teamNames: {
    blue: string;
    orange: string;
  };
  teamColors: {
    color_primary_blue: string;
    color_primary_orange: string;
  };
}
