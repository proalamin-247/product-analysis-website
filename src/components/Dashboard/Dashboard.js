import React from 'react';
import StackedAreaChart from '../StackedAreaChart/StackedAreaChart';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className='stacked-chart-area'>
                <StackedAreaChart></StackedAreaChart> 
            </div>
        </div>
    );
};

export default Dashboard;