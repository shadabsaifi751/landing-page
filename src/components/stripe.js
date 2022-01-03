import React from "react";
import {Container,Row,Col,Nav} from 'react-bootstrap'
import "./stripe.scss";

const Stripe = () => {
  return (
    <section className="bg-dark text-white">
      <Container>
        <Row className="">
          <Col>
          <Nav className="justify-content-md-end justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home" className="text-decoration-none text-white d-flex align-items-center">
                   <i class="bi bi-envelope me-2"></i>
                  info@bytequests.com
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" className="text-decoration-none text-white d-flex align-items-center">
                  <i class="bi bi-telephone-fill me-1"></i> +91 8476854951
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" className="text-decoration-none text-white d-flex align-items-center"> +1800-300-400</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Stripe;
