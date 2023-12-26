// PageLayout.tsx
import React from 'react';
import { Layout, Typography } from 'antd';
// import 'antd/dist/antd.css';
import './style.css'
import TextArea from 'antd/es/input/TextArea';
import { SideBar } from '../sideBar/sideBar';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

export const PageLayout: React.FC = () => {
  return (
    <Layout className="page-layout">
      <Header className="header">
        <Title level={2}>Your Title Here</Title>
      </Header>
      <Layout className="main-layout">
        <Content className="content">
          {/* Graph Component */}
          <div className="graph-container">
            {/* Replace this with your graph component */}
            Graph Component
          </div>
        </Content>
        {/* <SideBar/> */}
        <Sider className="sidebar" width="30%" theme="light">
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
          <br/>
          <br/>
          <TextArea>
            Sidebar Content
          </TextArea>
        </Sider>
      </Layout>
    </Layout>
  );
};

