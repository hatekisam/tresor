'use client'
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
        Chart as ChartJs,
        ArcElement,
        Tooltip,
        LineElement,
        CategoryScale,
        Filler,
        LinearScale,
        Legend,
        PointElement,
} from "chart.js";

ChartJs.register(
        ArcElement,
        Tooltip,
        LineElement,
        PointElement,
        LinearScale,
        Legend,
        Filler,
        CategoryScale
);

const StudentGraph = () => {
        const data = {
                labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
                datasets: [
                        {
                                label: "",
                                data: [60, 80, 70, 89.4, 75, 80, 78, 76, 60, 80, 76, 90, 80],
                                tension: 0.1,
                                borderColor: "rgba(25, 188, 100, 0.63)",
                        },
                ],
        };

        const options = {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                        legend: {
                                display: false,
                        }
                },
                scales: {
                        x: {
                                // display: false,
                                grid: {
                                        display: false
                                },
                        },
                        y: {
                                // display: false,
                                border: {
                                        dash: [5],
                                },
                                grid: {
                                        drawTicks: false,
                                },
                                ticks: {
                                        display: false, // Hide y-axis scale numbers
                                },
                        },
                },
        };

        return (
                <div className="w-full relative flex justify-center items-center">
                        <p className="absolute text-[rgba(0, 0, 0, 0.4)] left-[-2%] text-[12px] horizo-writing">Grades (%)</p>
                        <p className="absolute text-[rgba(0, 0, 0, 0.4)] bottom-[-2%] text-[12px] verti-writing">Academic terms</p>
                        <div className='w-[94%] h-[150px]'>
                                <Line data={data} options={options} />
                        </div>
                </div>
        );
};

export default StudentGraph;
