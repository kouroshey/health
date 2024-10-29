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
import { bmiCalculator } from "@/lib/helpers";

const SubsetsBMIChart = () => {
  const chartLabels = usersData.subsets.map((user) => {
    if (Number(user.weight) && Number(user.height)) {
      return `${user.name} ${user.lastname}`;
    }
  });
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "BMI کاربران",
        data: usersData.subsets.map(
          (user) =>
            user.height &&
            user.weight &&
            bmiCalculator(Number(user.weight), Number(user.height)),
        ),
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
