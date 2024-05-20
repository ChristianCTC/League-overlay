// utils.ts
export const calculateComparison = (
  blueValue: number,
  orangeValue: number
): [number, number] => {
  const total = blueValue + orangeValue;
  if (total === 0) return [50, 50];
  const bluePercentage = (blueValue / total) * 100;
  const orangePercentage = (orangeValue / total) * 100;
  return [bluePercentage, orangePercentage];
};
