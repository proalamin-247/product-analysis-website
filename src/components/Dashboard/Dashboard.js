import React from 'react';
import StackedAreaChart from '../StackedAreaChart/StackedAreaChart';
import PieChart from '../PieChart/PieChart';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <StackedAreaChart></StackedAreaChart>
            <PieChart></PieChart>
        </div>
    );
};

export default Dashboard;