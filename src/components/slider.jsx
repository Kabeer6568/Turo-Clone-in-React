import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";


// Ant Design
import { Card } from 'antd';


import { Layout } from 'antd';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


import { Pagination } from "swiper";


const { Meta } = Card;






const Slider = () => {
    return(
    <>
    <div>
        <Layout>
          <Container>
            <Row>
              <Col></Col>
              <Col xs={8}>
                <h1 className='main-heading'>
                  Find your drive
                </h1>

                <h3 className='sub-heading'>
                Explore the world's largest car sharing marketplace
                </h3>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Layout>
      </div>


    {/* slider */}

    <Container className="contaiber-style">
        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
            <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg" />}
  >
    <Meta title="Europe Street beat" />
  </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg" />}
  >
    <Meta title="Europe Street beat" />
  </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg" />}
  >
    <Meta title="Europe Street beat" />
  </Card>
            </SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        </Container>
    </>
    )
}


export default Slider