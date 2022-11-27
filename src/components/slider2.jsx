import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// import { Pagination } from "swiper";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";



// const { Meta } = Card;



const Slider2 = () => {
    return (
        <div className="slider-main-div">



            {/* slider */}

            <Container className="contaiber-style">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Container>
                            <Row>
                                <Col xs={12} s={12} md={6}><img className="img-fluid" width={'90%'} src="https://resources.turo.com/f/81934/416x284/a3870434ac/image_try_416x285.jpg" alt="" /></Col>
                                <Col xs={12} s={12} md={6}>
                                <div className="browseCars-style">
                                    <h3 className="headingStyle">
                                        Find the perfect car <span style={{ color: '#593CFB' }}> to tr<br /> before you buy </span>
                                    </h3>
                                    <p className="paraStyle">
                                        Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.
                                    </p>

                                    <button variant="" className="btn-browseCars" size="lg">
                                        Browse cars
                                    </button>
                                    </div>
                                </Col>
                            </Row>
                            </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Container>
                            <Row>
                                <Col><img src="https://resources.turo.com/f/81934/416x284/fa43ee8e2b/image_errand_416x285.jpg" alt="" /></Col>
                                <Col>
                                <div className="browseCars-style">
                                    <h3 className="headingStyle">
                                        Find the perfect car <span style={{ color: '#593CFB' }}> to tr<br /> before you buy </span>
                                    </h3>
                                    <p className="paraStyle">
                                        Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.
                                    </p>

                                    <button variant="" className="btn-browseCars" size="lg">
                                        Browse cars
                                    </button>
                                    </div>
                                </Col>
                            </Row>
                            </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Container>
                            <Row>
                                <Col><img src="https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg" alt="" /></Col>
                                <Col>
                                <div className="browseCars-style">
                                    <h3 className="headingStyle">
                                        Find the perfect car <span style={{ color: '#593CFB' }}> to tr<br /> before you buy </span>
                                    </h3>
                                    <p className="paraStyle">
                                        Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.
                                    </p>

                                    <button variant="" className="btn-browseCars" size="lg">
                                        Browse cars
                                    </button>
                                    </div>
                                </Col>
                            </Row>
                            </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Container>
                            <Row>
                                <Col><img src="https://resources.turo.com/f/81934/416x284/7c424a07d5/image_unwind_416x285.jpg" alt="" /></Col>
                                <Col>
                                <div className="browseCars-style">
                                    <h3 className="headingStyle">
                                        Find the perfect car <span style={{ color: '#593CFB' }}> to tr<br /> before you buy </span>
                                    </h3>
                                    <p className="paraStyle">
                                        Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.
                                    </p>

                                    <button variant="" className="btn-browseCars" size="lg">
                                        Browse cars
                                    </button>
                                    </div>
                                </Col>
                            </Row>
                            </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Container>
                            <Row>
                                <Col><img src="https://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg" alt="" /></Col>
                                <Col>
                                <div className="browseCars-style">
                                    <h3 className="headingStyle">
                                        Find the perfect car <span style={{ color: '#593CFB' }}> to tr<br /> before you buy </span>
                                    </h3>
                                    <p className="paraStyle">
                                        Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.
                                    </p>

                                    <button variant="" className="btn-browseCars" size="lg">
                                        Browse cars
                                    </button>
                                    </div>
                                </Col>
                            </Row>
                            </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Container>
                            <Row>
                                <Col><img  src="https://resources.turo.com/f/81934/416x284/1e828ae782/image_scenic_416x285.jpg" alt="" /></Col>
                                <Col>
                                <div className="browseCars-style">
                                    <h3 className="headingStyle">
                                        Find the perfect car <span style={{ color: '#593CFB' }}> to tr<br /> before you buy </span>
                                    </h3>
                                    <p className="paraStyle">
                                        Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.
                                    </p>

                                    <button variant="" className="btn-browseCars" size="lg">
                                        Browse cars
                                    </button>
                                    </div>
                                </Col>
                            </Row>
                            </Container>
                    </SwiperSlide>
                    
                </Swiper>
            </Container>
        </div>
    )
}
export default Slider2