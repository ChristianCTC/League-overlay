import { USBall } from "./US_Ball";
import { USTeam } from "./US_Team";

export interface USGame {
  arena: string;
  ball: USBall;
  hasTarget: boolean;
  hasWinner: boolean;
  isOT: boolean;
  isReplay: boolean;
  target: string;
  teams: USTeam[];
  time_milliseconds: number;
  time_seconds: number;
  winner: string;
}
