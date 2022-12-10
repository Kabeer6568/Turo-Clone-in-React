import React, { useState } from "react";

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import './App.css';
import Logo from './images/logo.PNG';
import { GiHamburgerMenu } from "react-icons/gi";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button, Modal } from 'antd';





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


    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const showModal2 = () => {
        setIsModalOpen2(true);
    };
    const handleOk2 = () => {
        setIsModalOpen2(false);
    };
    const handleCancel2 = () => {
        setIsModalOpen2(false);
    };


    const items = [
        {
            key: '1',
            label: (
                <>
                <a type="primary" onClick={showModal2}>
        Open Modal
      </a>
      <Modal title="Basic Modal" open={showModal2} onOk={handleOk2} onCancel={handleCancel2}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      </>
            ),
        },
        {
            key: '2',
            label: (
                <>
                <a type="primary" onClick={showModal}>
        Open Modal
      </a>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents.2</p>
        <p>Some contents2</p>
        <p>Some contents.2</p>
      </Modal>
      </>
            ),
        }
    
    ];

    
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