// src/components/BarChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', generation: 4000, consumption: 2400 },
  { name: 'Tue', generation: 3000, consumption: 1398 },
  { name: 'Wed', generation: 2000, consumption: 9800 },
  { name: 'Thu', generation: 2780, consumption: 3908 },
  { name: 'Fri', generation: 1890, consumption: 4800 },
  { name: 'Sat', generation: 2390, consumption: 3800 },
  { name: 'Sun', generation: 3490, consumption: 4300 },
];

const CustomBarChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="generation" fill="#8884d8" />
      <Bar dataKey="consumption" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default CustomBarChart;
