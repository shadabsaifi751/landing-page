import React from "react";
import { Container, Row, Col, InputGroup,FormControl } from "react-bootstrap";
import "../components/footer.scss";

const Discuss = () => {
  return (
    <section className="discuss py-5">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col sm={12} md={5}>
            <h2 className="mb-4 display-4 text-white">Lets Discuss</h2>
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              excepturi, atque unde aut
            </p>
          </Col>
          <Col sm={12} md={6}>
            <InputGroup className="mb-3 position-relative">
              <FormControl
              className="rounded-pill sign bg-light"
                placeholder=""
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text className="p-md-3 p-2 me-1 z-index50 rounded-pill px-4 bg-darkblue text-white position-absolute top-50 end-0 translate-middle-y" id="basic-addon2">Sign Up</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Discuss;
