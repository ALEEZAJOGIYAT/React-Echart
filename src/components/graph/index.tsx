import React, { useState } from 'react';
import './style.css';
import ReactEcharts from 'echarts-for-react';
import { NegativeBarChart } from './negativeBarChart';

export const GraphComponent = () => {

  const [xAxisDataOne, SetXAxisDataOne] = useState<number[]>([]);
  const [xAxisDataTwo, SetXAxisDataTwo] = useState<number[]>([]);
  const [yAxisLabel, SetYAxisLabels] = useState<string[]>([
    'Product',
    'Office of CEO',
    'Marketing',
    'Customer Support',
    'Finance',
    'HR',
    'IT',
    'Sales',
    'Operations'
  ]);

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

  const handleCustomDataOneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetXAxisDataOne(event.target.value.split(',').map(parseFloat)); //Parsed data
  };

  const handleCustomDataTwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      SetXAxisDataTwo(event.target.value.split(',').map(parseFloat));
  };

  const handleYAxisLabelsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetYAxisLabels(event.target.value.split(','));
  };

  const dataOne = xAxisDataOne.length > 0 ? xAxisDataOne : april2018Data;
  const dataTwo = xAxisDataTwo.length > 0 ? xAxisDataTwo : march2019Data;


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
      data: yAxisLabel,
    },
    series: [
      {
        name: 'April 2018',
        type: 'bar',
        data: dataOne.map((value) => (value * 100).toFixed(2)), // Converting into percentages 
        itemStyle: {
          normal: {
            color: 'rgb(114 196 237)',
          },
        },
      },
      {
        name: 'March 2019',
        type: 'bar',
        data: dataTwo.map((value) => (value * 100).toFixed(2)), // Converting into percentages 
        itemStyle: {
          normal: {
            color: 'rgb(255, 84, 84)',
          },
        },
      },
    ],
  };

  return (
    <div>
      <div className='data-points-inputs'>
        <label>
          Data:1
          <input type="text" onChange={handleCustomDataOneChange} />
        </label>
        <br />
        <label>
          Data:2
          <input type="text" onChange={handleCustomDataTwoChange} />
        </label>
        <br />
        <label>
         Labels:
          <input type="text" onChange={handleYAxisLabelsChange} />
        </label>
      </div>

      <div className="graph-container">
        <div className='bar-graph'>
          <ReactEcharts option={option} />
        </div>
        <div className='next-graph'>
          <NegativeBarChart />
        </div>
      </div>

    </div>
  );
};

export default GraphComponent;
