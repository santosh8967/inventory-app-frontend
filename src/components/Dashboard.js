import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
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

    const options = {
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
      },
      scales: {
        x: {
          type: 'category',
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

    const ctx = chartRef.current;

    if (ctx) {
      // Check if the chart instance exists
      if (ctx.chart) {
        // Destroy the existing chart
        ctx.chart.destroy();
      }

      // Create a new chart
      ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options,
      });
    }
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="chart-container">
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default Dashboard;

