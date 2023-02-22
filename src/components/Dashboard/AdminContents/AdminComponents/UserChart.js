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
  const options = {
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
    <div className="max-w-screen-xl mx-auto">
      <div className="sm:mx-5 mx-2 text-center  ">
        <div>
          <CanvasJSChart options={options} />
        </div>
      </div>
    </div>
  );
};

export default UserChart;
