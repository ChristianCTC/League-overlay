import { WsSubscribers } from "../Services/websocket";
import { createContext } from "react";

export const WebsocketContext = createContext(WsSubscribers);
