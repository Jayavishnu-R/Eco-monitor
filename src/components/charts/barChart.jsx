import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const Barnew = () => {
    const data = {
        labels: ['sep', "oct", "nov", "dec"],
        datasets: [
            {
                label: "consumption",
                backgroundColor: "#3498db",
                borderColor: "#2980b9",
                borderWidth: 1,
                hoverBackgroundColor: "#2980b9",
                hoverBorderColor: "#3498db",
                data: [80, 150, 120, 200],
            },
        ],
    };

    const options = {
        scales: {
            aspectRatio: 3.5,
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h1>Monthly consumption</h1>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Barnew;