import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    "name": "Total Incame",
    "Dollers": 1400,
  },
  {
    "name": "Last Year",
    "Dollers": 300,

  },
  {
    "name": "Last Month",
    "Dollers": 598,

  },
  {
    "name": "Last Week",
    "Dollers": 280,

  },
  {
    "name": "Last Day",
    "Dollers": 80,

  }
]


const IncameChart = () => {
  return (
    <div className=''>
      <div className=''>
        <h2 className='text-center mx-auto font-semibold text-lg my-5 bg-blue-700 w-3/5 text-white' >Incame Analysis</h2>
      </div>
      <div className=' flex justify-center'>
        <LineChart width={330} height={150} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Dollers" stroke="#8884d8" />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </div>
    </div>
  );
};

export default IncameChart;