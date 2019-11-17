import React from "react";
import { Line } from "react-chartjs-2";

export default function Chart() {
    return (
        <div >
            <div style={{ position: "relative", width: 1100, height: 600 }}>
                <h3>Hi</h3>
                <Line
                    options={{
                        responsive: true,
                        scales: {
                            //     xAxes: [
                            //         {

                            //             type: "time",
                            //             position: "bottom",
                            //             time: {
                            //                 displayFormats: { day: "DD MMM" },
                            //                 tooltipFormat: "DD MMM HH:mm",
                            //                 unit: "day"
                            //             }
                            //         }
                            //     ],
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                }
                            }]
                            // },
                            // // Mode 'index': showing tooltip when hovering anywhere over the chart
                            // tooltips: {
                            //     mode: 'index',
                            //     intersect: false
                            // },
                            // hover: {
                            //     mode: 'index',
                            //     intersect: false
                        }

                    }}
                    data={{
                        labels: ["a", "a", "a", "a", "a"],
                        datasets: [{
                            label: '# of Visitors',
                            data: [1, 2, 3, 4, 5,],
                            borderColor: '#cccccc',

                            borderWidth: 1
                        }]
                    }}
                />
            </div>
        </div>
    );
}
