import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartView = ({ chartDataOwe, chartDataOwed, chartOptions }) => {
  return (
    <div className="chart-view">
      <div className="chart-column">
        <h3>You Owe</h3>
        <div className="chart-container">
          <Bar data={chartDataOwe} options={chartOptions} />
        </div>
      </div>
      <div className="chart-column">
        <h3>You Are Owed</h3>
        <div className="chart-container">
          <Bar data={chartDataOwed} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ChartView;
