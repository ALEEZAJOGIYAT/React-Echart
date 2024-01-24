import React, { useState } from "react";
import { Button, Card, Layout } from 'antd';
import './style.css'
  
const {Sider } = Layout;


export const SideBar = () => {

    const [showDetails, setShowDetails] = useState(false);
    const handleShowDetails = () => {
        setShowDetails(true)
    }

    return(
            <div className="sidebar-container">
                <Sider>
                    <div className="sidebar-headings">
                        <h2>Summary</h2>
                        <h3 className="sidebar-subheading">April 2018- Mar 2019</h3>
                    </div>
                    
                    <div style={{paddingLeft: '12px'}}>
                        {showDetails && 
                            <Card className="sidebar-card">
                                <h4  style={{color:'blue'}}>Over All - 14.0%</h4>
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
                        </Card>
                        }
                        <br/>
                            <Button className="sidebar-button" onClick={handleShowDetails}>
                                <h4>View details</h4>
                            </Button>
                            <h4 className="legend-card-heading"> Legend</h4>
                            <div>
                                <Card className="legend-card">
                                    <p className="legend-card-content">Not all the data items are shown in this chart. <br/>
                                        To show these values, go to <br/>
                                        <a href="https://www.getsuper.ai/" target="_blank" rel="noopener noreferrer">CHAT SETTINGS</a>                                        
                                    </p>
                                </Card>
                            </div>
                    </div>
                </Sider>            
            </div>
    )
}