import React from 'react';
import './style.css';
import ReactEcharts from 'echarts-for-react';
import { NegativeBarChart } from './negativeBarChart';

export const GraphComponent = () => {
  const april2018Data = [
    0.0937,
    0.11,
    0.119,
    0.123,
    0.125,
    0.129,
    0.137,
    0.153,
    0.16,
  ];
  const march2019Data = [
    0.0859,
    0,
    0.109,
    0.12,
    0.0927,
    0.208,
    0.116,
    0.181,
    0.16,
  ];

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter: (params: any) => {
        return `${params[0].name}: ${(
          params[0].value * 100
        ).toFixed(2)}%`;
      },
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
        formatter: '{value}%', // Formating x-axis labels as percentages
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
        data: april2018Data.map((value) => (value * 100).toFixed(2)), // Converting into percentages 
        itemStyle: {
          normal: {
            color: 'rgb(114 196 237)',
          },
        },
      },
      {
        name: 'March 2019',
        type: 'bar',
        data: march2019Data.map((value) => (value * 100).toFixed(2)), // Converting into percentages 
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
        <NegativeBarChart />
      </div>
    </div>
  );
};

export default GraphComponent;
