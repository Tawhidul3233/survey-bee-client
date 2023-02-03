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
    <div className=' mx-auto my-5'>
      <div className=''>
        <h2 className='text-center mx-auto my-5 font-semibold text-lg  bg-blue-700 w-2/5 text-white' >Incame Analysis</h2>
      </div>
      <LineChart width={730} height={250} data={data}
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
  );
};

export default IncameChart;