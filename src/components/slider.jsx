import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";


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
    <div className="slider-main-div">
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
        <Swiper style={{padding: '20px 0px'}}
            // slidesPerView={5}
            spaceBetween={10}
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
            <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg" />}
  >
    <Meta title="Jeep" />
  </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://resources.turo.com/f/81934/386x308/7dcf9bff19/image_make_tesla-2x.jpg" />}
  >
    <Meta title="Tesla" />
  </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg" />}
  >
    <Meta title="Subaru" />
  </Card>
            </SwiperSlide>
            <SwiperSlide>   <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://resources.turo.com/f/81934/386x308/7e7ce60797/image_make_porsche-2x.jpg" />}
  >
    <Meta title="Porsche" />
  </Card>
  </SwiperSlide>
            <SwiperSlide>
            <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://resources.turo.com/f/81934/386x308/0c4f5f5186/image_make_bmw-2x.jpg" />}
  >
    <Meta title="BMW" />
  </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://resources.turo.com/f/81934/386x308/065308f2c4/image_make_mb-2x.jpg" />}
  >
    <Meta title="Mercedes Benz" />
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
            <SwiperSlide>   <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://resources.turo.com/f/81934/386x308/2809ca8702/image_make_toyota-2x.jpg" />}
  >
    <Meta title="Toyota" />
  </Card></SwiperSlide>
            <SwiperSlide>   <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://resources.turo.com/f/81934/386x308/994b145776/image_make_nissan-2x.jpg" />}
  >
    <Meta title="Nissan" />
  </Card></SwiperSlide>
        </Swiper>
        </Container>
    </div>
    )
}


export default Slider