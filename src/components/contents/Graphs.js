import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
ChartJS.register(ArcElement, Tooltip, Legend);


const Graphs = () => {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3, 35],
                backgroundColor: [
                    '#00D7FF',
                    '#0096FF',
                    '#00FFDD',
                    '#FF8E00',
                    '#AE00FB',
                    '#C85C8E',
                    '#DC3535',
                ],
                borderColor: [
                    '#00D7FF',
                    '#0096FF',
                    '#00FFDD',
                    '#FF8E00',
                    '#AE00FB',
                    '#C85C8E',
                    '#DC3535',
                ],
                borderWidth: 0.5,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        barPercentage: 0.8,
        categoryPercentage: 0.5,
    };

    return (
        <div className="w-3/4 bg-white rounded-md p-1">
            <h2 className="p-2 text-base font-normal">Sales Report</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Graphs