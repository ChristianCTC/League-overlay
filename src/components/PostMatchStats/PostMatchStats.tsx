// PostMatchStats.tsx
import React from "react";
import {
  MatchStats,
  StatCategory as StatCategoryType,
} from "./PostMatchStats.types";
import { calculateComparison } from "../../hooks/Utils";
import "./postMatchstats.css"; // Import the CSS file

interface PostMatchStatsProps {
  stats: MatchStats;
}

const PostMatchStats: React.FC<PostMatchStatsProps> = ({ stats }) => {
  const { blueTeam, orangeTeam } = stats;

  const statCategories: StatCategoryType[] = [
    "score",
    "goals",
    "assists",
    "shots",
    "saves",
    "demos",
  ];

  const numPlayers = Math.max(
    blueTeam.players.length,
    orangeTeam.players.length
  );

  return (
    <div className="standings">
      <table className="standings-table">
        <tr>
          <td className="column-team1">
            <table className="column-names">
              <tr className="column-title">
                {/* Render blue team player names */}
                {blueTeam.players.map((player, index) => (
                  <td key={index}>{player.name}</td>
                ))}
              </tr>
              <tr>
                <td colSpan={numPlayers} className="seperator-team1"></td>
              </tr>
              {/* Render blue team stats */}
              {statCategories.map((statCategory, index) => (
                <tr key={index} className="column-team-stats">
                  {blueTeam.players.map((player, playerIndex) => (
                    <td key={playerIndex}>{player[statCategory]}</td>
                  ))}
                </tr>
              ))}
            </table>
          </td>
          <td className="column-middle">
            <table className="column-combined-stats">
              <tr className="column-title">
                <td colSpan={3}>Overall</td>
              </tr>
              <tr>
                <td className="seperator-middle" colSpan={3}></td>
              </tr>
              {/* Render overall stats */}
              {statCategories.map((statCategory, index) => {
                const blueTeamStatTotal = blueTeam.players.reduce(
                  (acc, player) => acc + player[statCategory],
                  0
                );
                const orangeTeamStatTotal = orangeTeam.players.reduce(
                  (acc, player) => acc + player[statCategory],
                  0
                );
                const [bluePercentage, orangePercentage] = calculateComparison(
                  blueTeamStatTotal,
                  orangeTeamStatTotal
                );

                return (
                  <tr key={index} className="column-overall-stats">
                    <td colSpan={3}>
                      <div className="stat">{statCategory.toUpperCase()}</div>
                      <div className="overall-scores">
                        <div className="overall-score-blue">
                          {blueTeamStatTotal}
                        </div>
                        <div className="progress" style={{ width: "100%" }}>
                          <div
                            className="progress-bar blue"
                            style={{ width: `${bluePercentage}%` }}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                          <div
                            className="progress-bar orange"
                            style={{ width: `${orangePercentage}%` }}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                        <div className="overall-score-orange">
                          {orangeTeamStatTotal}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </td>
          <td className="column-team2">
            <table className="column-names">
              <tr className="column-title">
                {/* Render orange team player names */}
                {orangeTeam.players.map((player, index) => (
                  <td key={index}>{player.name}</td>
                ))}
              </tr>
              <tr>
                <td colSpan={numPlayers} className="seperator-team2"></td>
              </tr>
              {/* Render orange team stats */}
              {statCategories.map((statCategory, index) => (
                <tr key={index} className="column-team-stats">
                  {orangeTeam.players.map((player, playerIndex) => (
                    <td key={playerIndex}>{player[statCategory]}</td>
                  ))}
                </tr>
              ))}
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PostMatchStats;
