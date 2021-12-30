import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Foot = () => {
    return (
    <foot className="py-2 border-top">
      <Container>
      <Row className="py-2">
          <Col>
            <p className="text-center mb-0">@copy 2021-2022 example software PVT LTD</p>
          </Col>
        </Row>
      </Container>
    </foot>
    );
};

export default Foot;