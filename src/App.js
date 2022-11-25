import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Logo from './images/logo.PNG'
import Bg from './images/bg.jpg'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React from 'react';
import { DatePicker, Input } from 'antd';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const { RangePicker } = DatePicker;
const { TextArea } = Input;



function App() {
  return (
    <>
      {/* topbar */}
      <Navbar style={{ backgroundColor: '#f4f4f4' }}>
        <Container>
          <Navbar.Brand className='topbar-alignment'>Turo has launched in New York! Tap to explore cars.</Navbar.Brand>
        </Container>
      </Navbar>


      <Navbar>
        <Container>
          <Navbar.Brand >
            <img alt='' src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button className='btn-style' variant="outline-dark">Become a host</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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


      <div>
        <Layout>
          <Container>
            <Row>
              <Col></Col>
              <Col xs={8}>
                <h1 className='main-heading'>
                  Find your drive
                </h1>

                <h3 className='sub-heading'>
                Explore the world's largest car sharing marketplace
                </h3>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Layout>
      </div>









    </>
  )
}

export default App;