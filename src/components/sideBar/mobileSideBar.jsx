import React, { useState } from "react";
import { Button } from 'antd';
import './style.css'
import {MenuUnfoldOutlined,} from '@ant-design/icons';
import { useMediaQuery } from "react-responsive";
import { SideBar } from "./sideBar";
  

export const MobileSideBar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 700px)" });


    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
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