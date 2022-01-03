import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import "./developer.scss";
import dev1 from './assect/dev1.jpg';
import dev2 from './assect/dev4.jpg';
import dev3 from './assect/dev3.jpg';

const Developer = () => {
    return (
        <section className="py-5 Developer">
        <Container>
          <Row className="py-2 mb-5">
            <Col sm={12} md={12}>
              <p className="text-center mb-2 text-p">Lorem, ipsum dolor.</p>
              <h2 className="text-center fs-1 fw-normal">Developers On Demand</h2>
            </Col>
          </Row>
          <Row className="py-2">
            <Col sm={12} md={4}>
                <Card className="bg-dark text-white mb-4 mb-md-0">
                    <Card.Img src={dev1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Johan Sain</Card.Title>
                        <p>Web Developer</p>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col sm={12} md={4}>
                <Card className="bg-dark text-white mb-4 mb-md-0">
                    <Card.Img src={dev2} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Johan Sain</Card.Title>
                        <p>Web Developer</p>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col sm={12} md={4}>
                <Card className="bg-dark text-white mb-4 mb-md-0">
                    <Card.Img src={dev3} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Johan Sain</Card.Title>
                        <p>Web Developer</p>
                    </Card.ImgOverlay>
                </Card>
            </Col>
          </Row>
          </Container>
        </section>
    );
};

export default Developer;