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
import { usersData } from "@/store/local/users.static";

const calculateBMI = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(1);
};

const SubsetsBMIChart = () => {
  const data = {
    labels: usersData.subsets.map((user) => `${user.name} ${user.familyName}`), // اسامی کاربران به عنوان برچسب محور X
    datasets: [
      {
        label: "BMI کاربران",
        data: usersData.subsets.map((user) =>
          calculateBMI(user.weight, user.height),
        ), // محاسبه BMI هر کاربر
        borderColor: "#f48e0c",
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: "#f48e0c",
        pointBorderColor: "#f48e0c",
        pointRadius: 7,
        pointHoverRadius: 9,
        pointStyle: "circle",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "hidden",
        display: false,
      },
      title: {
        display: true,
        text: "نمودار BMI کاربران",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "BMI",
        },
        min: 10,
        max: 40,
      },
    },
  };

  return (
    <div style={{ height: "35vh", width: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default SubsetsBMIChart;
