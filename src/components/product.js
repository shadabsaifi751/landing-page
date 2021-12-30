import React, { useState, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./product.scss";
import product1 from "./assect/p1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import stockData from './data'

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

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
            <p className="text-center mb-2">Lorem, ipsum dolor.</p>
            <h2 className="text-center fw-normal">Products</h2>
          </Col>
        </Row>
        <Row>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
          >
            
            
              <SwiperSlide  >
              {stockData.map((data) => 
                  <Col sm={12} md={4}>
                        <div className="wrapper">
                          <div className="cont">
                            <div className="top"></div>
                            <div className={clicked ? "buy" : "bottom"}>
                              <div className="left">
                                <div className="details">
                                  <h2>{data.name}</h2>
                                  <p>£250</p>
                                </div>
                                <div className="buy" onClick={Toggle}>
                                  <i class="bi bi-cart4"></i>
                                </div>
                              </div>
                              <div className="right">
                                <div className="done">
                                  <i class="bi bi-check-square">done</i>
                                </div>
                                <div className="details">
                                  <h2>Chair</h2>
                                  <p>Added to your cart</p>
                                </div>
                                <div
                                  className="remove"
                                  onClick={Toggle}
                                >
                                  <i class="bi bi-arrow-left-circle">clear</i>
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
                  )}
              </SwiperSlide>
            
          </Swiper>
         
        </Row>
      </Container>
    </section>
  );
};

export default Product;
