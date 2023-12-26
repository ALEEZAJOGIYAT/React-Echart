import React from 'react';
import { Layout } from 'antd';
import './style.css'
import { SideBar } from '../sideBar/sideBar';
import {GraphComponent} from '../graph';

const {Content} = Layout;

export const PageLayout = () => {
  return (
    <Layout className="page-layout">
      <Layout className="main-layout">
        <Content className="content">
          {/* Graph Component */}
          <GraphComponent/>
        </Content>
        <div style={{marginTop:'-11px', backgroundColor:'£6b6a6a'}}>
          <SideBar/>
        </div>
      </Layout>
    </Layout>
  );
};

