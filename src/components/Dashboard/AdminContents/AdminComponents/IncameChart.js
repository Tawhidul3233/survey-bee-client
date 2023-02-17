import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const data = [
//   {
//     "name": "Total Incame",
//     "Dollers": 1400,
//   },
//   {
//     "name": "Last Year",
//     "Dollers": 300,

//   },
//   {
//     "name": "Last Month",
//     "Dollers": 598,

//   },
//   {
//     "name": "Last Week",
//     "Dollers": 280,

//   },
//   {
//     "name": "Last Day",
//     "Dollers": 80,

//   }
// ]


const IncameChart = () => {
  // <div className=' flex justify-center'>
  //       <LineChart width={330} height={150} data={data}
  //         margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  //         <CartesianGrid strokeDasharray="3 3" />
  //         <XAxis dataKey="name" />
  //         <YAxis />
  //         <Tooltip />
  //         <Legend />
  //         <Line type="monotone" dataKey="Dollers" stroke="#8884d8" />
  //         {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
  //       </LineChart>
  //     </div>
  const options = {
    animationEnabled: true,
    title: {
      text: "Incame Analysis"
    },
    axisX: {
      valueFormatString: "MMM"
    },
    axisY: {
      title: "Sales (in USD)",
      prefix: "$"
    },
    data: [{
      yValueFormatString: "$#,###",
      xValueFormatString: "MMMM",
      type: "spline",
      dataPoints: [
        { x: new Date(2023, 0), y: 213 },
        { x: new Date(2023, 1), y: 350 },
        { x: new Date(2023, 2), y: 250 },
        { x: new Date(2023, 3), y: 400 },
        { x: new Date(2023, 4), y: 150 },
        { x: new Date(2023, 5), y: 300 },
        { x: new Date(2023, 6), y: 700 },
        { x: new Date(2023, 7), y: 500 },
        { x: new Date(2023, 8), y: 300 },
        { x: new Date(2023, 9), y: 900 },
        { x: new Date(2023, 10), y: 660 },
        { x: new Date(2023, 11), y: 1100 }
      ]
    }]
  }

  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className=' my-16 sm:mx-5 mx-2  '>
        {/* <div className=''>
        <h2 className='text-center mx-auto font-semibold text-lg my-5 bg-blue-700 w-3/5 text-white' >Incame Analysis</h2>
      </div> */}

        <CanvasJSChart options={options}
        /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    </div>
  );
};

export default IncameChart;