import { useContext } from "react";
import { GameInfoContext } from "../../contexts/GameInfo";
import { GameService } from "../../Services/Game";
import {
  BoostMeterInnerCircle,
  BoostMeterRing,
  BoostMeterText,
  BoostMeterWrapper,
} from "./BoostCircle.style";
import { BoostService } from "../../Services/Boost";

export const BoostCircle = () => {
  const { gameInfo } = useContext(GameInfoContext);

  const spectatedPlayer = GameService.getPlayerTarget(
    gameInfo.players,
    gameInfo.target
  );

  const normalizedRadius = 150 - 10 * 2; //Inner radius - Thickness of ring * 2
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <BoostMeterWrapper>
      {spectatedPlayer && (
        <svg height={150 * 2} width={150 * 2}>
          <BoostMeterRing
            stroke={"#000000"}
            strokeDasharray={`${circumference} ${circumference}`}
            $dashOffset={BoostService.getBoostBarCircumference(
              spectatedPlayer.boost,
              circumference
            )}
            strokeWidth={10}
            fill="transparent"
            r={normalizedRadius}
            cx={150}
            cy={150}
          />
          <BoostMeterInnerCircle
            fill="#ffffff"
            r={normalizedRadius - 10 / 2}
            cx="50%"
            cy="50%"
          />
          <BoostMeterText
            fill="#000000"
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
          >
            {spectatedPlayer.boost}
          </BoostMeterText>
        </svg>
      )}
    </BoostMeterWrapper>
  );
};
