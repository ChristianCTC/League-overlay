export type StatCategory =
  | "score"
  | "goals"
  | "assists"
  | "shots"
  | "saves"
  | "demos";

export interface PlayerStats {
  name: string;
  score: number;
  goals: number;
  assists: number;
  shots: number;
  saves: number;
  demos: number;
}

export interface TeamStats {
  name: string;
  score: number;
  players: PlayerStats[];
}

export interface MatchStats {
  blueTeam: TeamStats;
  orangeTeam: TeamStats;
}
