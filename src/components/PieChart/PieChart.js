import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import './PieChart.css'

const PieChart = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 2410,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 4230,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 7260,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 5290,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 6010,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 6700,
            "revenue": 61000
        }
    ]
    return (
        <div className='chart-area'>
            <div className='chart-title'>
                <h2>Invesment - Revenue</h2>
                <h5>Last 6 months</h5>
            </div>
            <div>
                <BarChart
                    width={650}
                    height={450}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default PieChart;