import React, { useState } from "react";
import { Button, Layout, Typography } from 'antd';
import './style.css'
const { Header, Content, Sider } = Layout;


export const SideBar = () => {

    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => {
        setShowDetails(true)
    }

    return(
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
                        <h4>Lengend</h4>
                </div>
            </Sider>            
        </div>
    )
}