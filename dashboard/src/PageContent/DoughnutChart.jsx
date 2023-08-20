import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './DoughnutChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5', 'Course 6'],
  datasets: [
    {
      label: 'Time in hrs',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function DoughnutChart() {
  return <div>
        <div>
            <h3 className="doughnut-heading">Learning Time</h3>
        </div>
        <div className="doughnut">
            <Doughnut data={data} />
        </div>
        </div>
}
