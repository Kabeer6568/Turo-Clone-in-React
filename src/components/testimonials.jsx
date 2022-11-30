import React from "react";
import { Card } from 'antd';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { Layout } from 'antd';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';




const Testimonials = () => {
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
                                        Meet the hosts
                                    </h2>
                                </Col>
                                <Col></Col>
                            </Row>

                            <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                        <Card
    style={{
      width: 300,
    }}
  ><Row>
    <Col xs={4}>
    <img src="https://images.turo.com/media/driver/edc4lzlWTHGwKOpT3WF4Og.160x160.jpg" style={{width: '80px', height: '80px',}} alt="" />
    </Col>
    <Col xs={8}>
        hi
    </Col>
    </Row>
  </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                            <Card
    style={{
      width: 300,
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                    <Card
    style={{
      width: 300,
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                    <Card
    style={{
      width: 300,
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
                        </div>
                    </SwiperSlide>
                    
                    
                </Swiper>
                        </Container>
                    </Layout>
                </div>
            </div>
        </>
    )
}

export default Testimonials