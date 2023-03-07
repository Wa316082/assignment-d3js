import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
ChartJS.register(ArcElement, Tooltip, Legend);


export default function Chart() {
  const data = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [
      {
        data: [20, 30, 50, 40],
        backgroundColor: ['#166534', '#0f766e', '#075985', '#4c1d95'],
      },
    ],
  };

  const options = {
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontColor: 'green', // Set the font color for the legend labels
        fontSize: 14,
      },
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var meta = dataset._meta[Object.keys(dataset._meta)[0]];
          var total = meta.total;
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = parseFloat(((currentValue / total) * 100).toFixed(1));
          return currentValue + ' (' + percentage + '%)';
        },
        title: function (tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        },
      },
    },
  };

  return (
    <div className=''>
      <h2 className='p-2 text-base font-normal'>Color Distribution</h2>
      <Doughnut data={data} options={options} />
      
    </div>
  );
};



