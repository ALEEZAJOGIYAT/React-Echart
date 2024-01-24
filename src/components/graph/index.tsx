import React, { ChangeEvent, useState } from 'react';
import './style.css';
import ReactEcharts from 'echarts-for-react';
import { Input } from 'antd';

interface SaleData {
  subcategory: string;
  d__2019sale: number;
  d__2021sale: number;
}
export const GraphComponent: React.FC = () => {

  const [jsonData, setJsonData] = useState<SaleData[]>([]);

  const handleJsonChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const parsedData: SaleData[] = JSON.parse(e.target.value);
      setJsonData(parsedData);
    } catch (error) {
      console.error('Invalid JSON format');
    }
  };

  const categories = jsonData.map((item) => item.subcategory);
  const sales_2019 = jsonData.map((item) => item.d__2019sale);
  const sales_2021 = jsonData.map((item) => item.d__2021sale);


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
      bottom: '1%',
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
      data: categories
    },
    series: [
      {
        name: 'April 2018',
        type: 'bar',
        data: sales_2021.map((value) => (value * 100).toFixed(2)), // Converting into percentages 
        itemStyle: {
          normal: {
            color: 'rgb(114 196 237)',
          },
        },
      },
      {
        name: 'March 2019',
        type: 'bar',
        data: sales_2019.map((value) => (value * 100).toFixed(2)), // Converting into percentages 
        itemStyle: {
          normal: {
            color: 'rgb(255, 84, 84)',
          },
        },
      },
    ],
  };

  return (
    <>
      <a href='https://drive.google.com/file/d/1F7Rq5igiWH19EJShUoG-r7r_pwdhSrxR/view?usp=drive_link'> Sample Json Data</a>
        <Input
            placeholder="Enter JSON data"
            onChange={handleJsonChange}
            style={{width:'50%'}}
          />      
          <ReactEcharts option={option} style={{height:'70%', width:'78%', position:'absolute'}}/>
    </>
  );
};

export default GraphComponent;
