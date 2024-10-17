"use client";
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

const WeightChart = () => {
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
        label: "وزن کودک شما (کیلوگرم)",
        data: [12, 15, 20, 25, 30, 35, 40, 45],
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
        data: [13, 17, 22, 27, 32, 37, 42, 48],
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
        position: "top" as const, // استفاده از 'as const' برای مقدار ثابت
      },
      title: {
        display: false,
        text: "نمودار وزن به سن",
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
          text: "وزن (کیلوگرم)",
        },
        min: 10,
        max: 50,
      },
    },
  };

  return (
    <div style={{ height: "35vh", width: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default WeightChart;
