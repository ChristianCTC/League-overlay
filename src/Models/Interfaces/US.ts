import { USGame } from "./US_Game";

export interface UpdateState {
  event: string;
  game: USGame;
  hasGame: boolean;
  match_guid?: string;
  players: Object;
}
