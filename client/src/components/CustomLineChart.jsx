// src/components/LineChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '00:01', uv: 400, pv: 2400, amt: 2400 },
  { name: '00:02', uv: 300, pv: 1398, amt: 2210 },
  { name: '00:03', uv: 200, pv: 9800, amt: 2290 },
  { name: '00:04', uv: 278, pv: 3908, amt: 2000 },
  { name: '00:05', uv: 189, pv: 4800, amt: 2181 },
  { name: '00:06', uv: 239, pv: 3800, amt: 2500 },
  { name: '00:07', uv: 349, pv: 4300, amt: 2100 },
];

const CustomLineChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default CustomLineChart;
