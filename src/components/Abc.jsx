import React, { useState } from "react";

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import './App.css';
import Logo from './images/logo.PNG';
import { GiHamburgerMenu } from "react-icons/gi";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button, Modal } from 'antd';

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Login
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Signup
            </a>
        ),
    }

];




const MainHeader = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

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
                            <Dropdown className="main-dropdown"
                                menu={{
                                    items,
                                }}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <GiHamburgerMenu />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default MainHeader