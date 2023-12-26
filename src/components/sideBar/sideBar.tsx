import React, { useState } from "react";
import { Button, Layout, Menu } from 'antd';
import { CloseOutlined, RightOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

import './style.css'
const {Sider } = Layout;


export const SideBar = () => {

    const [showDetails, setShowDetails] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

    const handleShowDetails = () => {
        setShowDetails(true)
    }

    return(
        
              {!isMobile ? (
                    <Sider
                    collapsed={collapsed}
                    onCollapse={(value) => {
                        console.log(value);
                        setCollapsed(value);
                    }}
                    width={243}
                    style={{
                        overflow: "auto",
                        height: "100vh",
                        position: "fixed",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: "#4A0D37",
                    }}
                    >
                        <div>
                            <CloseOutlined onClick={() => setCollapsed(true)} />

                            {collapsed && (
                                <div onClick={() => setCollapsed(false)} className="collapsed_icon">
                                <RightOutlined />
                                </div>
                            )}
                        </div>

                    </Sider>
              ) : 
              <>
        <div className="main-container">            
            <Sider className="sidebar" theme="light" style={{height: '100%'}}>
                <div className="main-heading">
                    <h2>Summary</h2>
                    <h3 style={{fontSize: '12px'}}>April 2018- Mar 2019</h3>
                </div>
                
                <div className="sidebar-content">
                    {showDetails && 
                    
                    <div className="options-list"> 
                        <h4 className="options-list-content" style={{color:'blue', marginTop:'8px'}}>Over All - 24%</h4>
                        <hr />
                        <h4 className="options-list-content">Resignation Count</h4>
                        <hr />
                        <h4 className="options-list-content">Average Heads Count</h4>
                        <hr />
                        <h4 className="options-list-content" style={{color:'red'}}>High Performer - 160%</h4>
                        <hr />
                        <h4 className="options-list-content">Resignation Count</h4>
                        <hr />
                        <h4 className="options-list-content">Average Head Count</h4>
                        <hr />
                        <h4 className="options-list-content" style={{color:'green'}}>Performance</h4>
                    </div>
                    }
                    <br/>
                        <Button style={{width:'100%'}} onClick={handleShowDetails}>View Details</Button>
                        <h4>Legend</h4>
                </div>
            </Sider>           
 
        </div>
            </>
    )
}