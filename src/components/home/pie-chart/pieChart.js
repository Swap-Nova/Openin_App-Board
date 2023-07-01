import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './pieChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart(){

    const data = {
        labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
        datasets: [{
            labels: 'Poll',
            data: [55, 31, 14],
            backgroundColor: ['#98D89E', '#F6DC7D', '#EE8484'],
            borderColor: ['#98D89E', '#F6DC7D', '#EE8484'],
        }]
    }

    return(
        <>
            <div id='pie-chart-container'>
                <h1 className='products-heading'>Top Products</h1>
                <div className='pie-chart-content'>
                    <Doughnut className='pie-data' data={data}></Doughnut>

                    <div className='basic-tees-content'>
                        <p className='dot-1'></p>
                        <p className='pie-content-data'>Basic Tees</p>
                        <p className='pie-number-data'>55%</p>
                    </div>

                    <div className='custom-shorts-content'>
                        <p className='dot-2'></p>
                        <p className='pie-content-data'>Custom Shorts Pants</p>
                        <p className='pie-number-data'>31%</p>
                    </div>

                    <div className='hoodies-content'>
                        <p className='dot-3'></p>
                        <p className='pie-content-data'>Super Hoodies</p>
                        <p className='pie-number-data'>14%</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PieChart;