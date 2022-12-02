import React from "react";

import { Card } from 'antd';
import { Layout } from 'antd';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';




const DayDreams = () => {
    return (
        <>
            <div>
                <div>
                    <Layout>
                        <Container className="contaiber-style">
                            <Row>
                                <Col></Col>
                                <Col xs={8}>
                                    <h2 className='mainSub-heading'>
                                        Fuel your day dreams
                                    </h2>

                                    <p className='mainSub-heading-text'>
                                        Stoke your wanderlust with some dreamy photo chronicles of road trip adventures.
                                    </p>

                                    <button variant="" className="btn-daydream" size="lg">
                                        Browse cars
                                    </button>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    </Layout>
                </div>


                <div>
                    <Container className="daydream-container-style exp-banner">
                        <Row>
                            <Col>
                                <div className="site-card-border-less-wrapper">
                                    <Card className="card-styling"
                                        
                                        bordered={false}
                                        style={{
                                            width: 350,
                                        }}
                                    >
                                        <p className="feaured-style">FEATURED TRAVELOGUE</p>
                                        <p className="heading-experience">An Olympic experience in Washington</p>
                                        <p className="featured-para" >Discover the epic waterfalls, moody weather, and lush forests of coastal Washington.</p>
                                        <p className="featured-link" >Read More</p>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default DayDreams