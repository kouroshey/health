export const bmiCalculator = (weight: number, height: number) => {
  return (weight / (height / 100) ** 2).toFixed(1);
};
