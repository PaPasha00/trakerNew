'use client'

import React, { useEffect, useState } from "react";
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
    Legend,
);

export const options = {
    responsive: true,
    plugins: {
        title: {
            display: false, // Убираем заголовок
        },
        legend: {
            display: false, // Убираем легенду
        },

    },
    scales: {
        x: {
            grid: {
                display: false, // скрыть сетку по оси X
            },
        },
        y: {
            display: false,
        },
    },
};


function getGradient() {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(161, 88, 255, 0.52)");
    gradient.addColorStop(1, "rgba(78, 79, 255, .03)");

    return gradient;
}


const labels = ["", "", "", "", "", ""];

const CHART_DATASET = () => ({
    labels,
    datasets: [
        {
            data: [1, 100, 1000, 0, -1000, -2000],
            fill: "start",
            borderColor: "rgb(255, 99, 132)",
            pointHoverBackgroundColor: "rgba(78, 79, 255, 1)",
            pointHoverBorderColor: "rgba(255, 255, 255, 1)",
            backgroundColor: getGradient(),
            tension: 0.4,
            pointRadius: 0,
        },

    ],
});

export function LineChart() {
    const [dataC, setData] = useState<any>({ datasets: [] })
    const [optionsC, setOptions] = useState<any>({})

    useEffect(() => {
        setData(CHART_DATASET());
        setOptions(options);
    }, []);

    return <Line options={optionsC} data={dataC} />;
}
