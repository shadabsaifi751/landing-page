import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import "./service.scss";
import product1 from "./assect/websitedesign.jpg";
import product2 from "./assect/ondemand.jpg";
import product3 from "./assect/webhosting2.jpg";
import product4 from "./assect/webdevelop.jpg";
import product5 from "./assect/ondemand.jpg";
import product6 from "./assect/application.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// import webData from './data';
// import 'swiper/swiper-bundle.css';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'




const webData = [
    {
      name: "Website Design & Development",
      discription: "progravida nibha vel velit auctor alinean,lorem quis bibendum",
      image: product1,
      timeElapsed: "5 sec ago",
    },
    {
      name: "On Demand Devs",
      discription: "progravida nibha vel velit auctor alinean,lorem quis bibendum",
      image: product2,
      timeElapsed: "10 sec ago",
    },
    {
      name: "Webhosting",
      discription: "progravida nibha vel velit auctor alinean,lorem quis bibendum",
      image: product3,
      timeElapsed: "3 sec ago",
    },
    {
      name: "Web Developement",
      discription: "progravida nibha vel velit auctor alinean,lorem quis bibendum",
      image: product4,
      timeElapsed: "4 sec ago",
    },
    {
      name: "On Demand Devs",
      discription: "progravida nibha vel velit auctor alinean,lorem quis bibendum",
      image: product5,
      timeElapsed: "10 sec ago",
    },
    {
      name: "Application",
      discription: "progravida nibha vel velit auctor alinean,lorem quis bibendum",
      image: product6,
      timeElapsed: "10 sec ago",
    }
  ];

const Service = () => {
    return (
        <section className="py-2 Service">
        <Container>
          <Row className="py-2">
            <Col sm={12} md={12}>
              <p className="text-center mb-2 text-p">Lorem, ipsum dolor.</p>
              <h2 className="text-center fs-1 fw-normal">Service</h2>
            </Col>
          </Row>
          <Row className="py-4">
            <Swiper
              slidesPerView={3.4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              breakpoints={{
                "640": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "767": {
                  "slidesPerView": 1,
                  "spaceBetween": 40
                },
                "1024": {
                  "slidesPerView": 3.4,
                  "spaceBetween": 30
                }
              }} 
              className="mySwiper"
            >
              
              
                {webData.map((eachData) => 
                <SwiperSlide  className="my-2">
                    <Col sm={12} md={4}>
                        <Card className="service-card">
                            
                            <Card.Body className="body-sec">
                            <div className='top2'>
                                <Card.Img  src={eachData.image} className="img-fluid"/>
                            </div>
                                <Card.Title className="title">{eachData.name}</Card.Title>
                                <Card.Text className='text-center'>{eachData.discription}</Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <a href="#" className='text-decoration-none text-dark fw-medium'>Read more</a>
                             </Card.Body>
                        </Card>
                        
                    </Col>
                </SwiperSlide>
                    )}
              
            </Swiper>
           
          </Row>
        </Container>
      </section>
    );
};

export default Service;