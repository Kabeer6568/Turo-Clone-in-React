import React, { useState } from "react";

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import './App.css';
import Logo from './images/logo.PNG';
import { GiHamburgerMenu } from "react-icons/gi";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button, Modal, Form, Input, Checkbox, InputNumber } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import LoginForm from "./login_form";
import { getAuth, createUserWithEmailAndPassword } from "./Firebase/firebase";



const MainHeader = () => {

    
    const auth = getAuth();
    const login = (data)=>{
    createUserWithEmailAndPassword(auth, data.username, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    }
    
    return (
        <>
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
                        <Navbar.Text>
                            

                            <LoginForm login={login} />

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default MainHeader