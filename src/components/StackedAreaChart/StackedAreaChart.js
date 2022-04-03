import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './StackedAreaChart.css'

const StackedAreaChart = () => {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const data2 =[
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
                <h2>Invesment - Sell - Revenue</h2>
                <h5>Last 6 months</h5>
            </div>
            <div>
                <AreaChart
                    width={650}
                    height={450}
                    // data={data}
                    data={data2}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    {/* <XAxis dataKey="name" /> */}
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>
        </div>
    );
};

export default StackedAreaChart;