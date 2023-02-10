import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const UserChart = () => {
  const data = [
    {
      "name": "Total Users",
      "Users": 1150
    },
    {
      "name": "Paid Users",
      "Users": 150
    },
    {
      "name": "Free Users",
      "Users": 1000
    }
  ]

  return (
    <div className=''>
      <div>
        <h2 className='text-center mx-auto my-5 font-semibold text-lg bg-green-500 w-3/5 text-white'>User Analysis</h2>
      </div >
      <div className=' flex justify-center'>
        <BarChart width={330} height={150} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="pv" fill="#8884d8" /> */}
          <Bar dataKey="Users" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default UserChart;