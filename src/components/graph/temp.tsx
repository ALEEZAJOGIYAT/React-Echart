import React, { useState, ChangeEvent } from 'react';
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

  const generateGraphOption = () => {
    if (!Array.isArray(jsonData) || jsonData.length === 0) {
      return {};
    }

    const categories = jsonData.map((item) => item.subcategory);
    const seriesData = [
      {
        name: '2019 Sale',
        type: 'bar',
        data: jsonData.map((item) => ((item.d__2019sale / 1000) * 100).toFixed(2)), // Converting to percentage
        itemStyle: {
          normal: {
            color: 'rgb(114, 196, 237)',
          },
        },
      },
      {
        name: '2021 Sale',
        type: 'bar',
        data: jsonData.map((item) => ((item.d__2021sale / 1000) * 100).toFixed(2)), // Converting to percentage
        itemStyle: {
          normal: {
            color: 'rgb(255, 84, 84)',
          },
        },
      },
    ];

    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          return `${params[0].name}: ${params[0].value}%`;
        },
      },
      legend: {
        data: ['2019 Sale', '2021 Sale'],
      },
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
        data: categories,
      },
      series: seriesData,
    };
  };

  return (
    <div>
      <div>
        <Input
          placeholder="Enter JSON data"
          onChange={handleJsonChange}
        />
      </div>
      <div className="graph-container">
        <div className="bar-graph">
          <ReactEcharts option={generateGraphOption()} />
        </div>
      </div>
    </div>
  );
};

export default GraphComponent;
