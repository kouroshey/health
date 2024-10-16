import BackPage from "@/components/layout/BackPage";
import React from "react";
import GrowthChart from "./_component/GrowthChart";
import WeightChart from "./_component/WeightChart";
import BMIChart from "./_component/BmiChart";

const Stats = () => {
  return (
    <main className="flex flex-col">
      <BackPage title="گزارشات" />
      <GrowthChart />
      <WeightChart />
      <BMIChart />
    </main>
  );
};

export default Stats;
