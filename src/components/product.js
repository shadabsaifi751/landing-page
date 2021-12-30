import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./product.scss";
import product1 from "./assect/p1.jpg";

const Product = () => {
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
          <Col sm={12} md={4}>
          <div class="feature-card">
                {/* <img src={product1} className="img-fluid" alt="" /> */}
                <div class="feature-card-tilte">
                  <h3>Banking</h3>
                </div>
                <div class="feature-card-deatails">
                  <i class="fa fa-bank"></i>
                  <h4>Banking</h4>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
          </Col>
          <Col sm={12} md={4}>
          <div class="feature-card">
                <div class="feature-card-tilte">
                  <h3>Banking</h3>
                </div>
                <div class="feature-card-deatails">
                  <i class="fa fa-bank"></i>
                  <h4>Banking</h4>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
          </Col>
          <Col sm={12} md={4}>
          <div class="feature-card">
                <div class="feature-card-tilte">
                  <h3>Banking</h3>
                </div>
                <div class="feature-card-deatails">
                  <i class="fa fa-bank"></i>
                  <h4>Banking</h4>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Product;
