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
import InnerCircleImage from "../../assets/BoostMeter.png";

export const BoostCircle = () => {
  const { gameInfo } = useContext(GameInfoContext);

  const spectatedPlayer = GameService.getPlayerTarget(
    gameInfo.players,
    gameInfo.target
  );

  const radius = 150;
  const strokeWidth = 20;
  const normalizedRadius = radius - strokeWidth;
  const circumference = 2 * Math.PI * normalizedRadius;

  return (
    <BoostMeterWrapper>
      {spectatedPlayer && (
        <svg height={radius * 2} width={radius * 2}>
          <defs>
            <linearGradient
              id="boostGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#00ff00", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ff3c00", stopOpacity: 1 }}
              />
            </linearGradient>
            <clipPath id="circleClip">
              <circle cx="50%" cy="50%" r={normalizedRadius} />
            </clipPath>
          </defs>
          <BoostMeterRing
            stroke="url(#boostGradient)"
            strokeDasharray={`${circumference} ${circumference}`}
            $dashOffset={BoostService.getBoostBarCircumference(
              spectatedPlayer.boost,
              circumference
            )}
            strokeWidth={strokeWidth}
            fill="transparent"
            r={normalizedRadius}
            cx="50%"
            cy="50%"
            strokeLinecap="round"
            style={{ zIndex: 1 }}
          />
          <BoostMeterInnerCircle
            fill="transparent"
            r={normalizedRadius}
            cx="50%"
            cy="50%"
            style={{ zIndex: 2 }}
          />
          <image
            href={InnerCircleImage}
            x="7%"
            y="7%"
            height={normalizedRadius * 2}
            width={normalizedRadius * 2}
            clipPath="url(#circleClip)"
          />
          <BoostMeterText
            fill="#ffffff"
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            style={{ zIndex: 4 }}
          >
            {spectatedPlayer.boost}
          </BoostMeterText>
        </svg>
      )}
    </BoostMeterWrapper>
  );
};
