import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import "./portfolio.scss";
import dev1 from './assect/port2.jpg';
import dev2 from './assect/port1.jpg';
import dev3 from './assect/port3.jpg';

const Portfolio = () => {
    return (
        <section className="pt-3 pt-md-5 overflow-hidden pb-0 pb-md-5 portfolio">
        <Container>
          <Row className="py-2 mb-5">
            <Col sm={12} md={12}>
              <p className="text-center mb-2 text-p">Lorem, ipsum dolor.</p>
              <h2 className="text-center fs-1 fw-normal">Portfolio / Case Studies</h2>
            </Col>
          </Row>
          <Row className="py-2 gx-5">
            <Col sm={12} md={6} lg={4}>
                <Card className="mb-4 mb-md-4 mb-lg-0">
                    <div className="items">
                        <div className="item font">
                            <img src={dev1} className='img-fluid' alt="" />
                        </div>
                        <div className="item back">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, tempora.</div>       
                    </div>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
            <Card className="mb-4 mb-md-4 mb-lg-0">
                    <div className="items">
                        <div className="item font">
                            <img src={dev2} className='img-fluid' alt="" />
                        </div>
                        <div className="item back">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, tempora.</div>       
                    </div>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
            <Card className="mb-4 mb-md-4 mb-lg-0">
                    <div className="items">
                        <div className="item font">
                            <img src={dev3} className='img-fluid' alt="" />
                        </div>
                        <div className="item back">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, tempora.</div>       
                    </div>
                </Card>
            </Col>
          </Row>
          </Container>
        </section>
    );
};

export default Portfolio;