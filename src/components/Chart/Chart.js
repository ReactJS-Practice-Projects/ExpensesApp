import React, { useState } from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

  //get array of data point values only
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  //get maximum from all data point values. We use spread operator to pull values and pass them to the max function. 
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}  
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};


export default Chart;
