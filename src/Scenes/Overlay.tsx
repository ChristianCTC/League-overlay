import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Scorebug } from "../components/ScoreBug/Scorebug";
import { BoostCircle } from "../components/PlayerBoostCircle/BoostCircle";
import { PlayerStatCard } from "../components/PlayerStatCard/PlayerStat";
import { BoostMeter } from "../components/PlayerBoostMeters/playerBoostMeters";
import PostMatchStats from "../components/PostMatchStats/PostMatchStats";
import { useGameInfo } from "../contexts/useGameInfo";
import "../components/Transitions/transitions.css"; // Ensure to import the CSS styles

export const Overlay = () => {
  const { matchEnded, blueTeamStats, orangeTeamStats, gameInfo } =
    useGameInfo();

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Scorebug />
      <div
        style={{
          position: "absolute",
          top: "110px",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      >
        <TransitionGroup>
          {matchEnded ? (
            <CSSTransition key="postMatchStats" timeout={500} classNames="fade">
              <PostMatchStats
                stats={{
                  blueTeam: blueTeamStats,
                  orangeTeam: orangeTeamStats,
                }}
              />
            </CSSTransition>
          ) : (
            <CSSTransition key="gameInfo" timeout={500} classNames="fade">
              <div>
                <PlayerStatCard />
                <BoostCircle />
                <BoostMeter players={gameInfo.players} />
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Overlay;
