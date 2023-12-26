import React from 'react';
import { Layout, Typography } from 'antd';
import './style.css'
import { SideBar } from '../sideBar/sideBar';
import {GraphComponent} from '../graph';

const {Content} = Layout;

export const PageLayout = () => {
  return (
    <Layout className="page-layout">
      <Layout className="main-layout">
        <Content className="content" style={{width: '60%'}}>
          {/* Graph Component */}
          <GraphComponent/>
        </Content>
        {/* side Bar Component */}
        <SideBar/>
      </Layout>
    </Layout>
  );
};

