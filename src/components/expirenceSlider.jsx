import React from "react";

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

import { MdPets } from "react-icons/md";
import { AiTwotoneCar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FaTruckMonster } from "react-icons/fa";



import { Card } from 'antd';
const { Meta } = Card;

const ExperienceSlider = () => {
    return (
        <>
            <Container className="contaiber-style slider-main-div">
                <Swiper
                    // slidesPerView={3}
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
                    <SwiperSlide>
                        <div>
                            <Card className="cardbox"
                                hoverable
                                style={{ width: 340 }}
                                cover={<img alt="example" src="https://resources.turo.com/f/81934/328x262/0d5b069ff2/image_experience_petfriendly.jpg" />}
                            >
                                <p className="card-para">
                                    <span>
                                        <MdPets />
                                    </span>
                                    Pet-friendly
                                </p>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                            <Card className="cardbox"
                                hoverable
                                style={{ width: 340 }}
                                cover={<img alt="example" src="https://resources.turo.com/f/81934/328x262/61e1aebed5/image_experience_convertibles.jpg" />}
                            >
                                <p className="card-para">
                                    <span>
                                        <AiTwotoneCar />
                                    </span>
                                    Convertibles
                                </p>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                            <Card className="cardbox"
                                hoverable
                                style={{ width: 340 }}
                                cover={<img alt="example" src="https://resources.turo.com/f/81934/328x262/6a22a954a4/image_experience_allwheeldrive.jpg" />}
                            >
                                <p className="card-para">
                                    <span>
                                        <FaTruckMonster />
                                    </span>
                                    All-wheel drive
                                </p>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                            <Card className="cardbox"
                                hoverable
                                style={{ width: 340 }}
                                cover={<img alt="example" src="https://resources.turo.com/f/81934/328x262/294b8f8aec/image_experience_classiccars.jpg" />}
                            >
                                <p className="card-para">
                                    <span>
                                        <AiFillHeart />
                                    </span>
                                    Classic cars
                                </p>
                            </Card>
                        </div>
                    </SwiperSlide>
                    
                    
                </Swiper>
            </Container>
        </>
    )
}

export default ExperienceSlider