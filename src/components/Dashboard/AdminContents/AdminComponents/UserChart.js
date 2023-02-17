// import React from 'react';
// import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import React from "react";
import CanvasJSReact from "./canvasjs.react";
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const UserChart = () => {
  // const data = [
  //   {
  //     "name": "Total Users",
  //     "Users": 1150
  //   },
  //   {
  //     "name": "Paid Users",
  //     "Users": 150
  //   },
  //   {
  //     "name": "Free Users",
  //     "Users": 1000
  //   }
  // ]

  // <div className=' flex justify-center'>
  //       <BarChart width={330} height={150} data={data}>
  //         <CartesianGrid strokeDasharray="3 3" />
  //         <XAxis dataKey="name" />
  //         <YAxis />
  //         <Tooltip />
  //         <Legend />
  //         {/* <Bar dataKey="pv" fill="#8884d8" /> */}
  //         <Bar dataKey="Users" fill="#82ca9d" />
  //       </BarChart>
  //     </div>
  const optionAnswers = {
    title: {
      text: "Users Analysis",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Total Users", y: 1150 },
          { label: "Free Users", y: 1000 },
          { label: "Paid Users", y: 150 },
        ],
      },
    ],
  };

  return (
    <div className="sm:mx-5 mx-2 mb-20">
      {/* <div>
        <h2 className='text-center mx-auto my-5 font-semibold text-lg bg-green-500 w-3/5 text-white'>User Analysis</h2>
      </div > */}
      <div>
        <CanvasJSChart optionAnswers={optionAnswers} />
      </div>
    </div>
  );
};

export default UserChart;
