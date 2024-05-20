import { useState, useEffect } from "react";
import { WsSubscribers } from "../Services/websocket";
import { ResetCommand } from "../Settings";

export const useMatchState = () => {
  const [matchNumber, setMatchNumber] = useState<number>(() => {
    const savedMatchNumber = localStorage.getItem("matchNumber");
    return savedMatchNumber !== null ? JSON.parse(savedMatchNumber) : 0;
  });

  const [currentMatchDisplay, setCurrentMatchDisplay] = useState<number>(() => {
    const savedCurrentMatchDisplay = localStorage.getItem(
      "currentMatchDisplay"
    );
    return savedCurrentMatchDisplay !== null
      ? JSON.parse(savedCurrentMatchDisplay)
      : 1;
  });

  const [blueWins, setBlueWins] = useState<number>(() => {
    const savedBlueWins = localStorage.getItem("blueWins");
    return savedBlueWins !== null ? JSON.parse(savedBlueWins) : 0;
  });

  const [orangeWins, setOrangeWins] = useState<number>(() => {
    const savedOrangeWins = localStorage.getItem("orangeWins");
    return savedOrangeWins !== null ? JSON.parse(savedOrangeWins) : 0;
  });

  const [matchEnded, setMatchEnded] = useState<boolean>(false);

  useEffect(() => {
    const handleMatchEnded = (data: { winner_team_num: number }) => {
      setCurrentMatchDisplay((prevMatchNumber: number) => {
        const newMatchDisplay = prevMatchNumber + 1;
        localStorage.setItem(
          "currentMatchDisplay",
          JSON.stringify(newMatchDisplay)
        );
        return newMatchDisplay;
      });
      setMatchEnded(true);

      if (data.winner_team_num === 0) {
        setBlueWins((prevWins: number) => {
          const newBlueWins = prevWins + 1;
          localStorage.setItem("blueWins", JSON.stringify(newBlueWins));
          return newBlueWins;
        });
      } else {
        setOrangeWins((prevWins: number) => {
          const newOrangeWins = prevWins + 1;
          localStorage.setItem("orangeWins", JSON.stringify(newOrangeWins));
          return newOrangeWins;
        });
      }
      setMatchNumber((prevMatchNumber: number) => {
        const newMatchNumber = prevMatchNumber + 1;
        localStorage.setItem("matchNumber", JSON.stringify(newMatchNumber));
        return newMatchNumber;
      });
    };

    const handleMatchCreated = () => {
      setMatchEnded(false);
      resetMatchState();
    };

    const resetMatchState = () => {
      setMatchNumber(0);
      localStorage.setItem("matchNumber", JSON.stringify(0));
      setCurrentMatchDisplay(1);
      localStorage.setItem("currentMatchDisplay", JSON.stringify(1));
      setBlueWins(0);
      localStorage.setItem("blueWins", JSON.stringify(0));
      setOrangeWins(0);
      localStorage.setItem("orangeWins", JSON.stringify(0));
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === ResetCommand) {
        resetMatchState();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    WsSubscribers.subscribe("game", "match_ended", handleMatchEnded);
    WsSubscribers.subscribe("game", "match_created", handleMatchCreated);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      WsSubscribers.unsubscribe("game", "match_ended", handleMatchEnded);
      WsSubscribers.unsubscribe("game", "match_created", handleMatchCreated);
    };
  }, []);

  return {
    matchNumber,
    currentMatchDisplay,
    blueWins,
    orangeWins,
    matchEnded,
  };
};
