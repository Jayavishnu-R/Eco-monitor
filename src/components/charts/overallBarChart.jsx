import React from "react";
import { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, BarElement, CategoryScale, Tooltip, Legend);

const Chart = () => {
    const initial = {
        labels: ["lpg", "water", "electricity", "lpg"],
        datasets: [
            {
                data: [1050, 1000, 1100, 1200, 1155],
                label: "ELECTRICITY",
                borderColor: "#3333ff",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                fill: true,
            },
            {
                data: [1050, 1000, 1100, 1200, 1155],
                label: "WATER",
                borderColor: "#3333ff",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                fill: true,
            }, {
                data: [1050, 1000, 1100, 1200, 1155],
                label: "LPG",
                borderColor: "#3333ff",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                fill: true,
            }, {
                data: [1050, 1000, 1100, 1200, 1155],
                label: "FUEL",
                borderColor: "#3333ff",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                fill: true,
            },
        ],
    };



    const bar3 = (
        <Bar
            type="bar"
            width={130}
            height={50}
            options={{
                title: {
                    display: true,
                    text: "EB",
                    fontSize: 15,
                },
                legend: {
                    display: true, //Is the legend shown?
                    position: "top", //Position of the legend.
                },
            }}
            data={initial}
        />
    );
    return bar3;
};

export default Chart;