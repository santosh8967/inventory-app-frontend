import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Sample data for the chart
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Sales',
          data: [65, 59, 80, 81, 56],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderWidth: 1,
        },
      ],
    };

    setChartData(data);
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="chart-container">
        <Bar data={chartData} options={options} className="chart" />
      </div>
    </div>
  );
};

export default Dashboard;
