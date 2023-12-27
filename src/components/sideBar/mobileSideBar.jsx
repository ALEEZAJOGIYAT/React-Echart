import React, { useState } from "react";
import { Button, Layout } from 'antd';
import './style.css'
import {MenuUnfoldOutlined,} from '@ant-design/icons';
  
const {Sider } = Layout;


export const MobileSideBar = () => {

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
            <div className="sidebar-container">
                <Sider >
                    <div className="sidebar-headings">
                        <h2>Summary</h2>
                        <h3 style={{fontSize: '12px', paddingTop:'23px'}}>April 2018- Mar 2019</h3>
                    </div>
                    
                    <div>
                        {showDetails && 
                        
                        <div className="sidebar-content"> 
                            <h4  style={{color:'blue', marginTop:'8px'}}>Over All - 14.0%</h4>
                            <hr />
                            <h4 >Resignation Count 639</h4>
                            <hr />
                            <h4 >Average Heads Count 4.58K</h4>
                            <hr />
                            <h4  style={{color:'red'}}>High Performer - 14.1%</h4>
                            <hr />
                            <h4 >Resignation Count - 152</h4>
                            <hr />
                            <h4 >Average Head Count 108k</h4>
                            <hr />
                            <h4  style={{color:'green'}}>Performance -0.16p</h4>
                        </div>
                        }
                        <br/>
                            <Button  onClick={handleShowDetails}>View Details</Button>
                            <h4>Legend</h4>
                    </div>
                </Sider>            
            </div>
        </div>
    )
}