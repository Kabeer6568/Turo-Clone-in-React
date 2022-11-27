import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import './App.css';
import Logo from './images/logo.PNG'

const MainHeader = () => {
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default MainHeader