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
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const GrowthChart = () => {
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
        label: "قد کودک شما (سانتی‌متر)",
        data: [85, 100, 115, 125, 135, 145, 155, 165],
        borderColor: "#f48e0c",
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: "#f48e0c",
        pointBorderColor: "#f48e0c",
        pointRadius: 6,
        pointHoverRadius: 8,
        pointStyle: "circle",
      },
      {
        label: "صدک 50 (میانگین)",
        data: [86, 102, 118, 128, 138, 148, 158, 170],
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "rgba(255, 206, 86, 1)",
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
      },
      title: {
        display: false,
        text: "نمودار قد به سن",
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
          text: "قد (سانتی‌متر)",
        },
        min: 50,
        max: 180,
      },
    },
  };

  return (
    <div style={{ height: "35vh", width: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default GrowthChart;
