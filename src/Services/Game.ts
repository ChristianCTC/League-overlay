import { MatchEnded } from "../Models/Interfaces/MatchEnded";
import { USPlayer } from "../Models/Interfaces/US_Player";

const getOrangeTeam = (players: USPlayer[]): USPlayer[] => {
  return players.filter((player) => player.team === 1);
};

const getBlueTeam = (players: USPlayer[]): USPlayer[] => {
  return players.filter((player) => player.team === 0);
};

const getPlayerTarget = (
  players: USPlayer[],
  target: string
): USPlayer | undefined => {
  return players.find((player) => target.includes(player.name));
};

const getClockFromSeconds = (seconds: number, isOt: boolean): string => {
  const numMinutes = Math.floor(seconds / 60);
  const numSeconds = seconds - numMinutes * 60;
  const secondString =
    numSeconds > 9 ? numSeconds.toString() : `0${numSeconds}`;
  return isOt
    ? `+${numMinutes}:${secondString}`
    : `${numMinutes}:${secondString}`;
};

const getScoredFromPlayers = (players: USPlayer[]) => {
  return players.map((player) => player.score);
};

const getGoalsFromPlayers = (players: USPlayer[]): number[] => {
  return players.map((player) => player.goals);
};

const getAssistsFromPlayers = (players: USPlayer[]) => {
  return players.map((player) => player.assists);
};

const getShotsFromPlayers = (players: USPlayer[]) => {
  return players.map((player) => player.shots);
};

const getSavesFromPlayers = (players: USPlayer[]) => {
  return players.map((player) => player.saves);
};

const getDemosFromPlayers = (players: USPlayer[]) => {
  return players.map((player) => player.demos);
};

let currentMatchNumber = 0;

const handleMatchEnded = (
  matchResult: MatchEnded,
  players: USPlayer[]
): number => {
  currentMatchNumber++;
  return currentMatchNumber;
};

export const GameService = {
  getOrangeTeam,
  getBlueTeam,
  getPlayerTarget,
  getClockFromSeconds,
  getScoredFromPlayers,
  getGoalsFromPlayers,
  getAssistsFromPlayers,
  getShotsFromPlayers,
  getSavesFromPlayers,
  getDemosFromPlayers,
  handleMatchEnded,
};
