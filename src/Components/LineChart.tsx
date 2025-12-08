import React from "react";
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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type LineChartProps = {
  labels: string[];          
  data: number[];            
  title?: string;            
  color?: string;            
};

const LineChart: React.FC<LineChartProps> = ({
  labels,
  data,
  title = "KPI Trend",
  color = "#3b82f6", 
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        borderColor: color,
        backgroundColor: `${color}33`, 
        tension: 0,                  
        fill: true,
        pointRadius: 3,
        pointHoverRadius: 5,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title: { display: !!title, text: title },
      tooltip: { enabled: true },
    },
    scales: {
      x: { title: { display: true, text: "Time" } },
      y: {
        title: { display: true, text: "Value" },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ height: 300 }}>
      <Line data={chartData} options={options} />
    </div>
  );
};
export default LineChart;
