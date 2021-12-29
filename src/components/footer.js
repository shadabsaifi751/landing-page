import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import logo from "./assect/logo.png";
import "../components/footer.scss";

const Footer = () => {
  return (
    <footer className="py-5">
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <div className="foot-logo">
              <img src={logo} className="img-fluid mb-4" alt="" />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
              officiis! Voluptate fuga perspiciatis asperiores facilis labore
              nulla ut
            </p>
          </Col>
          <Col sm={6} md={2}>
            <Nav defaultActiveKey="/home" className="flex-column">
              <h5 className="fs-5 fw-bold ps-3">Link</h5>
              <Nav.Link href="/home">Our Clients</Nav.Link>
              <Nav.Link eventKey="link-1">Privacy Policy</Nav.Link>
              <Nav.Link eventKey="link-2">Our Benefits</Nav.Link>
            </Nav>
          </Col>
          <Col sm={6} md={2}>
            <Nav defaultActiveKey="/home" className="flex-column">
              <h5 className="fs-5 fw-bold ps-3">Information</h5>
              <Nav.Link href="/home">Our Clients</Nav.Link>
              <Nav.Link eventKey="link-1">Privacy Policy</Nav.Link>
              <Nav.Link eventKey="link-2">Our Benefits</Nav.Link>
            </Nav>
          </Col>
          <Col sm={6} md={4}>
            <Nav defaultActiveKey="/home" className="flex-column">
              <h5 className="fs-5 fw-bold ps-3">Contact us</h5>
              <Nav.Link href="/home">+91 1298765435 , +1800-300-400</Nav.Link>
              <Nav.Link eventKey="link-1">info@bytequets.com</Nav.Link>
              <p className="fs-6 ps-3 pt-2">84, Block A, Sector 4, Noida, Uttar Pradesh 201301</p>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
