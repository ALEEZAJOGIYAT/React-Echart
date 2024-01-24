import React from 'react';
import { DatePicker, Layout, theme } from 'antd';
import type { DatePickerProps } from 'antd';
import GraphComponent from '../graph';

const {Content } = Layout;


const Temp: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <div className='headings'>
                  <h4>Comparison of high rates to the overall rates</h4>
                  <div className='heading-buttons'>
                      <DatePicker onChange={onChange} 
                          picker="month" 
                          className="custom-month-picker"
                          placeholder='Mar 2019'
                      />
                  </div>
                  <br/>
              </div>
              <GraphComponent/>
            </Content>
        </Layout>

  );
};

export default Temp;