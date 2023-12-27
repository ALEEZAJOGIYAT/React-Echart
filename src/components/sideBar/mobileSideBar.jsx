import React, { useState } from "react";
import { Button, Layout } from 'antd';
import './style.css'
import {MenuUnfoldOutlined,} from '@ant-design/icons';
import { useMediaQuery } from "react-responsive";
import { SideBar } from "./sideBar";
  
const {Sider } = Layout;


export const MobileSideBar = () => {

    const [showDetails, setShowDetails] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 700px)" });


    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    } 
    const handleShowDetails = () => {
        setShowDetails(true)
    }

    return(
        <div>
            {isMobile && 
            <Button
                onClick={toggleCollapsed}
                >
                <MenuUnfoldOutlined />
            </Button> 
             }
            {
                collapsed && 
                    <SideBar/>
            }

        </div>
    )
}