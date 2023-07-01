import React from 'react';
import './lineGraph.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

function LineGraph(){

    const data = {
        labels: ["Week 1","Week 2","Week 3","Week 4"],
        datasets: [{
            data: [100,400,150,450,190,250],
            backgroundColor: 'transparent',
            borderColor: '#9BDD7C',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.5
        }]
    };

    const options = {
        plugins : {
            legend: false
        },
        scales: {
            x: {
                grid : {
                    display: false
                }
            },
            y: {
                min:0,
                max:500,
                ticks: {
                    stepSize: 100
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    };

    return(
        <div style={{width: '1500px', height: '300px',position:'relative', bottom: '1590px', marginLeft:'140px'}}>
            <Line
                data={data} options={options}
            />
        </div>
    );
}

export default LineGraph;