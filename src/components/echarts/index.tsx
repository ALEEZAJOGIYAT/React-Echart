import React from 'react';
import { Button, Col, DatePicker, Layout, Row } from 'antd';
import './style.css'
import { SideBar } from '../sideBar/sideBar';
import {GraphComponent} from '../graph';
import type { DatePickerProps } from 'antd';
import { FaPlus } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import { useMediaQuery } from 'react-responsive';
import { MobileSideBar } from '../sideBar/mobileSideBar';



const {Content} = Layout;

export const PageLayout = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 300px)' })

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
    {/* <Container fluid> */}
      <Row>
        <Col 
        // offset={isMobile ? 0 : 4} 
        lg={18} xs={24} >
          <div className='headings'>
            <h4>Comparison of high performer resignation rates to the overall resignation rates</h4>
            <p >Do high performers resign more often than others</p>
            <div className='heading-buttons'>
              <DatePicker onChange={onChange} 
                  picker="month" 
                  className="custom-month-picker"
                  placeholder='Mar 2019'
                />
                <Button style={{marginLeft:'10px'}}>
                <FaPlus/>  Add Filters
                </Button>
            </div>
            <br/>
        </div>
        <GraphComponent/>

        </Col>
        <Col lg={6} xs={24}>
          <MobileSideBar/>
        </Col>
      </Row>
    {/* </Container> */}
      

    </div>

    // <Layout className="page-layout">
    //   <Layout className="main-layout">
    //     <Content className="content">
    //       {/* Graph Component */}
    //     </Content>
    //   </Layout>
    // </Layout>
  );
};

