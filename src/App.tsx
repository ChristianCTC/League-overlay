import React, { useState } from "react";
import { useEffect } from "react";
import { WsSubscribers } from "./Services/websocket";
import { WebsocketContext } from "./contexts/websocket";
import { GameContext } from "./contexts/GameContext";
import { DEFAULT_GAME_INFO, GameInfoContext } from "./contexts/GameInfo";
import { Overlay } from "./Scenes/Overlay";

function App() {
  useEffect(() => {
    WsSubscribers.init(49322, false);
  }, []);
  const [gameInfo, setGameInfo] = useState<GameContext>(DEFAULT_GAME_INFO);

  return (
    <WebsocketContext.Provider value={WsSubscribers}>
      <GameInfoContext.Provider
        value={{ gameInfo: gameInfo, setGameInfo: setGameInfo }}
      >
        <Overlay />
      </GameInfoContext.Provider>
    </WebsocketContext.Provider>
  );
}

export default App;
