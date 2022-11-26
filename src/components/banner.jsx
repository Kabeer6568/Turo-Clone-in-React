import React from "react";

import { DatePicker, Input } from 'antd';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Layout } from 'antd';
const { RangePicker } = DatePicker;
const { Header, Footer, Sider, Content } = Layout;




const Banner = ()=>{
    return(
        <>
        <div className='bg' style={{ backgroundImage: `url("https://resources.turo.com/f/81934/1500x400/1b78692b7b/hp_ny_1500x400_2.jpg")` }}>
        <Form style={{ padding: '10px 0' }}>
          <Container className='contaiber-style'>
            <Row className='row-style'>
              <Col>
                <FloatingLabel controlId="floatingSelect" label="Where">
                  <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                <div className='header-style'>
                  <label>
                    From
                  </label>
                  <RangePicker showTime />
                </div>
              </Col>
              <Col>
                <div className='header-style'>
                  <label>
                    Until
                  </label>
                  <RangePicker showTime />
                </div>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
        </>
    )
}





export default Banner