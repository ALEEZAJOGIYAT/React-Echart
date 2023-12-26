import TextArea from "antd/es/input/TextArea";
import { Layout, Typography } from 'antd';
import React from "react";
import './style.css'
const { Header, Content, Sider } = Layout;


export const SideBar = () => {
    return(
        <div className="main-container">
            <Sider className="sidebar"  theme="light" style={{height: '100%'}}>
                <h4>Summary</h4>
                <h6>April 2018- Mar 2019</h6>
                <div className="sidebar-content">
                    <div className="options-list">
                    <p>Option 1</p>
                    <p>Option 2</p>
                    <p>Option 3</p>
                    </div>
                </div>
            </Sider>            
        </div>
    )
}