import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DoughnutC = () => {
    const options = {
        animationEnabled: true,
        title: {
            text: "CO EMISSION",
        },
        subtitles: [
            {
                text: "71% Positive",
                verticalAlign: "center",
                fontSize: 20,
                dockInsidePlotArea: true,
            },
        ],
        data: [
            {
                type: "doughnut",
                showInLegend: true,
                radius: "90%",

                indexLabel: "",
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    { name: "LPG", y: 5 },
                    { name: "EB", y: 31 },
                    { name: "Data", y: 40 },
                    { name: "Fuel", y: 50 },
                ],
            },
        ],
    };

    return <CanvasJSChart options={options} />;
};

export default DoughnutC;