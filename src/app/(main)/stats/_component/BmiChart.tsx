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
  Filler, // برای اضافه کردن ناحیه رنگی زیر نمودار
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
        data: [15, 16, 16.5, 17, 18, 19, 20, 21], // داده‌های BMI
        borderColor: "#f48e0c", // رنگ خط اصلی (رنگ اصلی شما)
        backgroundColor: "rgba(244, 142, 12, 0.2)", // ناحیه رنگی زیر خط
        borderWidth: 2,
        fill: true, // برای پر کردن زیر نمودار
        pointBackgroundColor: "#f48e0c", // رنگ داخل نقاط
        pointBorderColor: "#f48e0c", // رنگ حاشیه نقاط
        pointRadius: 7, // اندازه نقاط
        pointHoverRadius: 9, // اندازه نقاط هنگام hover
        pointStyle: "rectRot", // استایل نقاط (مربع چرخیده)
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
    maintainAspectRatio: false, // کنترل نسبت ابعاد
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "نمودار BMI به سن",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
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
    <div style={{ height: "50vh", width: "100%" }}>
      {" "}
      {/* ارتفاع را اینجا تنظیم کنید */}
      <Line data={data} options={options} />
    </div>
  );
};

export default BMIChart;
