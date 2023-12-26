// GraphComponent.tsx
import React from 'react';
import './style.css'; // Import your Sass file
import ReactEcharts from "echarts-for-react"; 

export const GraphComponent = () => {

const  option = {
    title: {
      text: 'World Population'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
     data: ['Product', 'CEO', 'Marketing', 'Block', 'Finance', 'Marketing'
      , 'IT', 'Product', 'Operations']
  },
    series: [
      {
        name: '2011',
        type: 'bar',
        data: [90000, 110000, 120000, 130000, 133000, 240000, 138370, 153000, 160000]
      },
      {
        name: '2012',
        type: 'bar',
        data: [70000, 0, 110000, 120000, 93600, 310000, 108370, 163000, 160000]
      }
    ]
  };
  
  

  return (
    <div className="graph-container">
        <h4>Comparison of high performer resignation rates to the over all resignation rates</h4>
        <p>Do high performers resign more often than others</p>
        <ReactEcharts option={option} />
      {/* Replace this with your graph component */}
    </div>
  );
};

