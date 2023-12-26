import TextArea from "antd/es/input/TextArea";
import { Layout, Typography } from 'antd';
import React from "react";
import './style.css'
const { Header, Content, Sider } = Layout;


export const SideBar = () => {
    return(
        <div className="main-container">
            <Sider className="sidebar"  theme="light" style={{height: '100%'}}>
            <TextArea>
                Sidebar Content
            </TextArea>
            <br/>
            <TextArea>
                Sidebar Content
            </TextArea>
            </Sider>            
        </div>
    )
}