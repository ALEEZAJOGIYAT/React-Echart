
import React from 'react';
import './style.css';
import ReactEcharts from 'echarts-for-react';


export const GraphComponent = () => {
  const highPerformer = [
    9.00000,
    110000,
    120000,
    130000,
    133000,
    240000,
    138370,
    153000,
    160000,
  ];
  const overAllPerformer = [
    70000,
    0,
    110000,
    120000,
    93600,
    310000,
    108370,
    163000,
    160000,
  ];

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLabel: {
        formatter: '{value}%', // Format x-axis labels as percentages
      },
    },
    yAxis: {
      type: 'category',
      data: [
        'Product',
        'Office of CEO',
        'Marketing',
        'Customer Support',
        'Finance',
        'HR',
        'IT',
        'Sales',
        'Operations',
      ],
    },
    series: [
      {
        name: 'April 2018',
        type: 'bar',
        data: highPerformer.map((value) => (value / 1000).toFixed(2)), // Converting into percentages 
        itemStyle: {
          normal: {
            color: 'rgb(114 196 237)',
          },
        },
      },
      {
        name: 'March 2019',
        type: 'bar',
        data: overAllPerformer.map((value) => (value / 1000).toFixed(2)), // Convert into percentages 
        itemStyle: {
          normal: {
            color: 'rgb(255, 84, 84)',
          },
        },
      },
    ],
  };

  return (
      <div className="graph-container">
        <div className='bar-graph'>
          <ReactEcharts option={option} />
        </div>
        <div className='next-graph'>
          <ReactEcharts option={option} />
        </div>
    </div>
  );
};
