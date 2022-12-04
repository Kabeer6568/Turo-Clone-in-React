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
                
                spaceBetween={10}

                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                  },
                  768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                  },
                  1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                  },
              }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className="p-2">
                  <div>
                    <Card className="p-2"
                      style={{
                        width: 300,
                      }}
                    ><Row>
                        <Col xs={4}>
                          <img className="review_img" src="https://images.turo.com/media/driver/edc4lzlWTHGwKOpT3WF4Og.160x160.jpg" style={{ width: '80px', height: '80px', }} alt="" />
                        </Col>
                        <Col xs={8}>
                          <p className="review-title">Kevin M.</p>
                          <p className="review-data">All-Star Host</p>
                          <p className="review-data">498 trips . Joined Aug 2020</p>
                        </Col>
                        <p className="review">
                          He came thru for us at the last minute I was literally on the plane when I got a call that my
                        </p>
                      </Row>
                    </Card>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                  <Card className="p-2"
                      style={{
                        width: 300,
                      }}
                    ><Row>
                        <Col xs={4}>
                          <img className="review_img" src="https://images.turo.com/media/driver/edc4lzlWTHGwKOpT3WF4Og.160x160.jpg" style={{ width: '80px', height: '80px', }} alt="" />
                        </Col>
                        <Col xs={8}>
                          <p className="review-title">Kevin M.</p>
                          <p className="review-data">All-Star Host</p>
                          <p className="review-data">498 trips . Joined Aug 2020</p>
                        </Col>
                        <p className="review">
                          He came thru for us at the last minute I was literally on the plane when I got a call that my
                        </p>
                      </Row>
                    </Card>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                  <Card className="p-2"
                      style={{
                        width: 300,
                      }}
                    ><Row>
                        <Col xs={4}>
                          <img className="review_img" src="https://images.turo.com/media/driver/edc4lzlWTHGwKOpT3WF4Og.160x160.jpg" style={{ width: '80px', height: '80px', }} alt="" />
                        </Col>
                        <Col xs={8}>
                          <p className="review-title">Kevin M.</p>
                          <p className="review-data">All-Star Host</p>
                          <p className="review-data">498 trips . Joined Aug 2020</p>
                        </Col>
                        <p className="review">
                          He came thru for us at the last minute I was literally on the plane when I got a call that my
                        </p>
                      </Row>
                    </Card>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                  <Card className="p-2"
                      style={{
                        width: 300,
                      }}
                    ><Row>
                        <Col xs={4}>
                          <img className="review_img" src="https://images.turo.com/media/driver/edc4lzlWTHGwKOpT3WF4Og.160x160.jpg" style={{ width: '80px', height: '80px', }} alt="" />
                        </Col>
                        <Col xs={8}>
                          <p className="review-title">Kevin M.</p>
                          <p className="review-data">All-Star Host</p>
                          <p className="review-data">498 trips . Joined Aug 2020</p>
                        </Col>
                        <p className="review">
                          He came thru for us at the last minute I was literally on the plane when I got a call that my
                        </p>
                      </Row>
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