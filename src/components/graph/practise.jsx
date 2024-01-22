import React, { ChangeEvent, useState } from 'react';
import './style.css';
import ReactEcharts from 'echarts-for-react';
import { NegativeBarChart } from './negativeBarChart';
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
      console.log(parsedData, 'parsedddddddddddddd dataaaaa')
      setJsonData(parsedData);
    } catch (error) {
      console.error('Invalid JSON format');
    }
  };

const tempCate = [
  'Bookcases', 'Labels', 'Accessories', 'Copiers', 'Machines', 'Chairs', 'Tables', 'Art', 'Envelopes', 'Furnishings', 'Fasteners', 'Appliances', 'Supplies', 'Storage', 'Binders', 'Phones', 'Paper']



  const categories = jsonData.map((item) => item.subcategory);
  const sales_2019 = jsonData.map((item) => item.d__2019sale);
  const sales_2021 = jsonData.map((item) => item.d__2021sale);
  console.log(categories, 'cajhjhbdsjdb')


  const april2018Data = [
    101096.96797180176,
    5236.062787532806,
    94436.95135688782,
    99178.18908691406,
    96587.89018249512,
    152225.61891937256,
    78526.16323852539,
    16798.07052254677,
    8628.26382780075,
    76903.99239730835,
    1194.1905014514923,
    65314.00522232056,
    3779.914409637451,
    113806.76581382751,
    68298.49900579453,
    174402.99104881287,
    35502.55073451996,
  ];


  const march2019Data = [
    62931.26985168457,
    9820.563998937607,
    113423.82188212872,
    114199.46112060547,
    243639.41075611115,
    260093.79663848877,
    188872.7861442566,
    25359.164004564285,
    11353.1259932518,
    50246.26994919777,
    2176.373995423317,
    62788.72799515724,
    11199.67172408104,
    137802.37221431732,
    149184.9614830017,
    219493.20419549942,
    37613.21588611603,
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
      data: tempCate
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
    <div>
      <div>
        <Input
            placeholder="Enter JSON data"
            onChange={handleJsonChange}
            style={{width:'50%'}}
          />      
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
