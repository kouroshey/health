"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const BMIChart = () => {
  const data = {
    labels: [
      "2 سال",
      "4 سال",
      "6 سال",
      "8 سال",
      "10 سال",
      "12 سال",
      "14 سال",
      "16 سال",
    ],
    datasets: [
      {
        label: "BMI کودک شما",
        data: [15, 16, 16.5, 17, 18, 19, 20, 21],
        borderColor: "#f48e0c",
        backgroundColor: "rgba(244, 142, 12, 0.2)",
        borderWidth: 2,
        fill: true,
        pointBackgroundColor: "#f48e0c",
        pointBorderColor: "#f48e0c",
        pointRadius: 7,
        pointHoverRadius: 9,
        pointStyle: "rectRot",
      },
      {
        label: "صدک 50 (میانگین)",
        data: [14.5, 15.5, 16, 16.7, 17.5, 18.5, 19, 20],
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "rgba(54, 162, 235, 1)",
        pointRadius: 5,
        pointHoverRadius: 7,
        pointStyle: "triangle",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
      title: {
        display: false,
        text: "نمودار BMI به سن",
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "سن (سال)",
        },
      },
      y: {
        title: {
          display: true,
          text: "BMI",
        },
        min: 10,
        max: 25,
      },
    },
  };

  return (
    <div style={{ height: "35vh", width: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default BMIChart;
