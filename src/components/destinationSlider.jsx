import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { Card } from 'antd';



// import required modules
import { Pagination } from "swiper";

const Destination = () => {
    return (
        <>
        <Container className="contaiber-style slider-main-div">
        <Swiper
            slidesPerView={6}
            spaceBetween={15}
            loop={true}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
            <Card className="card-shadow"
    style={{
      width: 300,
    }}
  >
    <img src="https://resources.turo.com/f/81934/240x240/7825448638/illo_city_losangeles-2x.png" alt="" />
    <p className="ant-card-meta-title">Los Angeles </p>
    
  </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card className="card-shadow"
    style={{
      width: 300,
    }}
  >
    <img src="https://resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png" alt="" />
    <p className="ant-card-meta-title">Miami</p>
    
  </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card className="card-shadow"
    style={{
      width: 300,
    }}
  >
    <img src="https://resources.turo.com/f/81934/240x240/bbe188de38/illo_city_honolulu-2x.png" alt="" />
    <p className="ant-card-meta-title">Honolulu</p>
    
  </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card className="card-shadow"
    style={{
      width: 300,
    }}
  >
    <img src="https://resources.turo.com/f/81934/240x240/81f82e7068/illo_city_denver-2x.png" alt="" />
    <p className="ant-card-meta-title">Denver</p>
    
  </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card className="card-shadow"
    style={{
      width: 300,
    }}
  >
    <img src="https://resources.turo.com/f/81934/240x240/1442627566/illo_city_london-2x.png" alt="" />
    <p className="ant-card-meta-title">London</p>
    
  </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card className="card-shadow"
    style={{
      width: 300,
    }}
  >
    <img src="https://resources.turo.com/f/81934/240x240/87ab56dd05/illo_city_toronto-2x.png" alt="" />
    <p className="ant-card-meta-title">Toronto</p>
    
  </Card>
            </SwiperSlide>
            <SwiperSlide><Card className="card-shadow"
    style={{
      width: 300,
    }}
  >
    <img src="https://resources.turo.com/f/81934/240x240/101ea2791a/illo_city_jerseycity-2x.png" alt="" />
    <p className="ant-card-meta-title">Jersey City</p>
    
  </Card>
  </SwiperSlide>
            <SwiperSlide>
            <Card className="card-shadow"
    style={{
      width: 300,
    }}
  >
    <img src="https://resources.turo.com/f/81934/240x240/c00858690e/illo_city_sanfrancisco-2x.png" alt="" />
    <p className="ant-card-meta-title">San Francisco</p>
    
  </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card className="card-shadow"
    style={{
      width: 300,
    }}
  >
    <img src="https://resources.turo.com/f/81934/240x240/a49b80f1ba/illo_city_atlanta-2x.png" alt="" />
    <p className="ant-card-meta-title">Atlanta</p>
    
  </Card>
            </SwiperSlide>
        </Swiper>
        </Container>
        <div style={{padding:'30px 0'}}></div>
        </>
    )
}

export default Destination