import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import logo from "./assect/logo.png";
import "../components/footer.scss";
import Foot from './foot'

const Footer = () => {
  return (
    
    <>
    <footer className="py-5">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4} className="mb-4 mb-md-4 mb-lg-0">
            <div className="foot-logo">
              <img src={logo} className="img-fluid mb-4" alt="" />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
              officiis! Voluptate fuga perspiciatis asperiores facilis labore
              nulla ut
            </p>
          </Col>
          <Col sm={6} md={6} lg={2} className="mb-4 mb-md-4 mb-lg-0">
            <Nav defaultActiveKey="/home" className="flex-column">
              <h5 className="fs-5 fw-bold ps-3">Link</h5>
              <Nav.Link eventKey="link-1">Our Clients</Nav.Link>
              <Nav.Link eventKey="link-2">Privacy Policy</Nav.Link>
              <Nav.Link eventKey="link-3">Our Benefits</Nav.Link>
            </Nav>
          </Col>
          <Col sm={6} md={6} lg={2} className="mb-4 mb-md-4 mb-lg-0">
            <Nav defaultActiveKey="/home" className="flex-column">
              <h5 className="fs-5 fw-bold ps-3">Information</h5>
              <Nav.Link eventKey="link-1">Our Clients</Nav.Link>
              <Nav.Link eventKey="link-2">Privacy Policy</Nav.Link>
              <Nav.Link eventKey="link-3">Our Benefits</Nav.Link>
            </Nav>
          </Col>
          <Col sm={6} md={6} lg={4} className="mb-4 mb-md-4 mb-lg-0">
            <Nav defaultActiveKey="/home" className="flex-column">
              <h5 className="fs-5 fw-bold ps-3">Contact us</h5>
              <Nav.Link eventKey="link-1">+91 1298765435 , +1800-300-400</Nav.Link>
              <Nav.Link eventKey="link-1">info@example.com</Nav.Link>
              <p className="fs-6 ps-3 pt-2">84, Block A, Sector 4, Noida, Uttar Pradesh 201301</p>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
    <Foot/>
    </>
  );
};

export default Footer;
