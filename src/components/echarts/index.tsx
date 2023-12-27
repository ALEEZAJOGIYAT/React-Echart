import React from 'react';
import { Button, Col, DatePicker, Row } from 'antd';
import './style.css'
import { SideBar } from '../sideBar/sideBar';
import {GraphComponent} from '../graph';
import type { DatePickerProps } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { MobileSideBar } from '../sideBar/mobileSideBar';


export const PageLayout = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' })    

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <Row>
        <Col 
        lg={18} xs={20} >
          <div className='headings'>
            <h4>Comparison of high performer resignation rates to the overall resignation rates</h4>
            <p style={{paddingTop : '12px'}}>Do high performers resign more often than others</p>
            <div className='heading-buttons'>
              <DatePicker onChange={onChange} 
                  picker="month" 
                  className="custom-month-picker"
                  placeholder='Mar 2019'
                />
                <Button style={{marginLeft:'10px'}}>
                  + Add Filters
                </Button>
            </div>
            <br/>
        </div>
        <GraphComponent/>
        </Col>
        <Col lg={6} xs={4}>
          {isMobile ? 
            <MobileSideBar/> : <SideBar/>
            }
        </Col>
      </Row>
    </div>
  );
};

