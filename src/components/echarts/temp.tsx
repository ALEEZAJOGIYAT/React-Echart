import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Button, DatePicker, Layout, Menu, theme } from 'antd';
import type { DatePickerProps } from 'antd';
import GraphComponent from '../graph';

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

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
          {/* <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider> */}
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <div className='headings'>
                    <h4>Comparison of high performer resignation rates to the overall resignation rates</h4>
                    <p style={{paddingTop : '12px'}}>Do high performers resign more often than others</p>
                    <div className='heading-buttons'>
                        <DatePicker onChange={onChange} 
                            picker="month" 
                            className="custom-month-picker"
                            placeholder='Mar 2019'
                        />
                        <Button style={{marginLeft:'10px'}}>
                            + Add Filters
                        </Button>
                    </div>
                    <br/>
                </div>
                <div>
                    <GraphComponent/>
                </div>          
            </Content>
        </Layout>

  );
};

export default Temp;