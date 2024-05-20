import styled, { keyframes } from "styled-components";

// Define the keyframes animation
const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

// Stat Card Wrapper
export const StatCardWrapper = styled.div`
  background: #0f0f0f;
  color: white;
  height: 100px;
  border-radius: 0px 0px 0px 20px;
  display: flex;
  align-items: center;
  font-family: TitilliumWeb, sans-serif;
  position: relative;
`;

// Animated Stat Card Wrapper
export const AnimatedStatCardWrapper = styled(StatCardWrapper)`
  animation: ${slideInFromLeft} 0.5s ease-out forwards;
  position: fixed;
  bottom: 0;
  left: 0;
`;

// Stat Card Container
export const PlayersStatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 30px;
  padding: 0 10px;
`;

// Player Name Container
export const PlayerNameContainer = styled.div<{ teamColor: string }>`
  background-color: ${(props) => props.teamColor};
  display: flex;
  font-size: 35px;
  padding: 25px 30px;
  font-weight: 900;
  border-radius: 0 0 0 0;
  width: auto;
  text-transform: uppercase;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

// Styled components for rows
export const StatRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StatValue = styled.p`
  text-align: center;
  flex: 1;
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin: 0;
`;

export const StatName = styled.p`
  font-size: 20px;
  color: #ccc;
  margin: 0;
`;
