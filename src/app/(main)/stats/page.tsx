import BackPage from "@/components/layout/BackPage";
import React from "react";
import GrowthChart from "./_component/GrowthChart";
import WeightChart from "./_component/WeightChart";
import BMIChart from "./_component/BmiChart";

const Stats = () => {
  return (
    <main className="flex flex-col">
      <BackPage title="گزارشات" />
      <div className="flex flex-col gap-2">
        <div className="bg-slate-50 border border-gray-100 shadow-sm p-2 rounded-sm">
          <h2 className="text-gray-600 py-2 font-semibold">نمودار قد به سن</h2>
          <GrowthChart />
        </div>
        <div className="bg-slate-50 border border-gray-100 shadow-sm p-2 rounded-sm">
          <h2 className="text-gray-600 py-2 font-semibold">نمودار وزن به سن</h2>
          <WeightChart />
        </div>
        <div className="bg-slate-50 border border-gray-100 shadow-sm p-2 rounded-sm">
          <h2 className="text-gray-600 py-2 font-semibold">نمودار BMI</h2>
          <BMIChart />
        </div>
      </div>
    </main>
  );
};

export default Stats;
