import React, { useState } from "react";
import { Button, Layout } from 'antd';
import './style.css'
import {MenuUnfoldOutlined,} from '@ant-design/icons';
  
const {Sider } = Layout;


export const SideBar = () => {

    const [showDetails, setShowDetails] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    } 
    const handleShowDetails = () => {
        setShowDetails(true)
    }

    return(
        <div>

            <div className="main-container">
                <Button
                    // type="primary"
                    onClick={toggleCollapsed}
                >
                    <MenuUnfoldOutlined />
                </Button>
                {
                    collapsed && 

                <Sider className="sidebar" theme="light" style={{height: '100%'}}>
                    <div className="main-heading">
                        <h2>Summary</h2>
                        <h3 style={{fontSize: '12px'}}>April 2018- Mar 2019</h3>
                    </div>
                    
                    <div className="sidebar-content">
                        {showDetails && 
                        
                        <div className="options-list"> 
                            <h4 className="options-list-content" style={{color:'blue', marginTop:'8px'}}>Over All - 14.0%</h4>
                            <hr />
                            <h4 className="options-list-content">Resignation Count 639</h4>
                            <hr />
                            <h4 className="options-list-content">Average Heads Count 4.58K</h4>
                            <hr />
                            <h4 className="options-list-content" style={{color:'red'}}>High Performer - 14.1%</h4>
                            <hr />
                            <h4 className="options-list-content">Resignation Count - 152</h4>
                            <hr />
                            <h4 className="options-list-content">Average Head Count 108k</h4>
                            <hr />
                            <h4 className="options-list-content" style={{color:'green'}}>Performance -0.16p</h4>
                        </div>
                        }
                        <br/>
                            <Button style={{width:'100%'}} onClick={handleShowDetails}>View Details</Button>
                            <h4>Legend</h4>
                    </div>
                </Sider>            
                }

            </div>
        </div>
    )
}