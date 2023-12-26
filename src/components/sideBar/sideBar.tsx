import React from "react";
import { Layout, Typography } from 'antd';
import './style.css'
const { Header, Content, Sider } = Layout;


export const SideBar = () => {
    return(
        <div className="main-container">
            <Sider className="sidebar"  theme="light" style={{height: '100%'}}>
                <h2>Summary</h2>
                <h3>April 2018- Mar 2019</h3>
                <div className="sidebar-content">
                    <div className="options-list">
                    <h4 style={{color:'blue', marginTop:'8px'}}>Over All - 24%</h4>
                    <hr />
                    <h4>Resignation Count</h4>
                    <hr />
                    <h4>Average Heads Count</h4>
                    <hr />
                    <h4 style={{color:'red'}}>High Performer - 160%</h4>
                    <hr />
                    <h4>Resignation Count</h4>
                    <hr />
                    <h4>Average Head Count</h4>
                    <hr />
                    <h4 style={{color:'green'}}>Performance</h4>
                    </div>
                </div>
            </Sider>            
        </div>
    )
}