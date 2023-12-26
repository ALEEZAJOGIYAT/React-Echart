// PageLayout.tsx
import React from 'react';
import { Layout, Typography } from 'antd';
// import 'antd/dist/antd.css';
import './style.css'
import TextArea from 'antd/es/input/TextArea';
import { SideBar } from '../sideBar/sideBar';
import {GraphComponent} from '../graph';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

export const PageLayout = () => {
  return (
    <Layout className="page-layout">
      <Layout className="main-layout">
        <Content className="content" style={{width: '60%'}}>
          {/* Graph Component */}
          <GraphComponent/>
        </Content>
        <SideBar/>
        {/* <Sider className="sidebar" theme="light">
        <TextArea style={{width : '70%'}}>
            Sidebar Content
          </TextArea>
          <br/>
          <br/>
          <TextArea>
            Sidebar Content
          </TextArea>
          <br/>
          <br/>
          <TextArea>
            Sidebar Content
          </TextArea>
          <br/>
          <br/>
          <TextArea>
            Sidebar Content
          </TextArea>
        </Sider> */}
      </Layout>
    </Layout>
  );
};

