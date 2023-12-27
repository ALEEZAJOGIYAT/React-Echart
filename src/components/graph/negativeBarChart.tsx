
import React from 'react';
import './style.css';
import ReactEcharts from 'echarts-for-react';


export const NegativeBarChart = () => {

    const labelRight = {
        position: 'right'
      };
    const option = {
        title: {
          // text: 'Bar Chart with Negative Value'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: 80,
          bottom: 30
        },
        xAxis: {
          type: 'value',
          position: 'bottom',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          type: 'category',
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: [
            'pp',
            'pp',
            'pp',
            'pp',
            'pp',
            'pp',
            'pp',
            'pp',
            'pp',
            'pp',
          ]
        },
        series: [
          {
            name: 'Cost',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              formatter: '{b}'
            },
            itemStyle: {
                normal: {
                  color: 'rgb(59, 209, 209)',
                },
            },      
            data: [
              { value: 0.78, label: labelRight },
              { value: 11.0, label: labelRight },
              { value: 1.08, label: labelRight },
              { value: 0.34, label: labelRight },
              { value: 3.20, label: labelRight },
              { value: -7.90, label: labelRight },
              { value: -0.17, label: labelRight },
              { value: 2.04, label: labelRight },
              { value: -2.87, label: labelRight },
              { value: 0.01, label: labelRight },
            ]
          }
        ]
      };

  return (
      <div className='negative-barChart'>
          <ReactEcharts option={option} />
      </div>
  );
};
