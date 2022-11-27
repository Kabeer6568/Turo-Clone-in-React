
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
// import Logo from './images/logo.PNG'
// import Bg from './images/bg.jpg'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React from 'react';
import { DatePicker, Input } from 'antd';
import { Layout } from 'antd';
import Slider from './components/slider';
import Banner from './components/banner';
import MainHeader from './components/Abc';
import Slider2 from './components/slider2'

const { Header, Footer, Sider, Content } = Layout;

const { RangePicker } = DatePicker;
const { TextArea } = Input;





function App() {
  return (
    <>
      
      <MainHeader />
      
<Banner />





      <Slider />
      <Slider2 />





    </>
  )
}

export default App;