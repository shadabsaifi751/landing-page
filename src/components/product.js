import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./product.scss";
// import product1 from "./assect/p1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import stockData from './data';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const Product = () => {
  const [clicked, setClicked] = useState(true);



  const Toggle = () => {
    setClicked(!clicked);
  };

  return (
    <section className="py-5 product">
      <Container>
        <Row className="py-2">
          <Col sm={12} md={12}>
            <p className="text-center mb-2 text-p">Lorem, ipsum dolor.</p>
            <h2 className="text-center fs-1 fw-normal">Products</h2>
          </Col>
        </Row>
        <Row className="py-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            className="mySwiper"
          >
            
            
              {stockData.map((eachData) => 
              <SwiperSlide  className="my-4">
                  <Col sm={12} md={4}>
                        <div className="wrapper">
                          <div className="cont">
                            <div className="top">
                              <img src={eachData.image} className="img-fluid" alt="" />
                            </div>
                            <div className="bottom">
                              <div className="left">
                                <div className="details">
                                  <h2 className="fs-5">{eachData.name}</h2>
                                  <p className="fs-5 fw-bold text-muted">£{eachData.price}</p>
                                </div>
                                <div className="buy" onClick={Toggle}>
                                  <i class="bi bi-cart4"></i>
                                </div>
                              </div>
                              <div className="right">
                                <div className="done">
                                  <i class="bi bi-check-square">done</i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="inside">
                            <div className="icon">
                              <i class="bi bi-exclamation-square fs-5"></i>
                            </div>
                            <div className="contents">
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                                cum!
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
              </SwiperSlide>
                  )}
            
          </Swiper>
         
        </Row>
      </Container>
    </section>
  );
};

export default Product;
