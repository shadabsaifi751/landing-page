import React from "react";
import {Row,Container,Navbar, Nav,Button} from 'react-bootstrap';
import '../components/Header.scss';
import Stripe from './stripe';
import logo from '../components/assect/logo.png';

const Header = () => {
  return (
      <>
        <Stripe/>
        <section className="shadow bg-light sticky-top">
        <Container className="bg-white " fluid="xl">
            <Row>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="">
                    <>
                    <Navbar.Brand href="#home" className="logo">
                        <img src={logo} className="img-fluid" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto me-5">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#About">About us</Nav.Link>
                        <Nav.Link href="#Service">Service</Nav.Link>
                        <Nav.Link href="#Products">Products</Nav.Link>
                        <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button className="bg-darkblue border-0 px-4 py-2 rounded-pill">Contact Us</Button>
                        </Nav>
                    </Navbar.Collapse>
                    </>
                </Navbar>
            </Row>
        </Container>
        </section>

        </>
  )
};

export default Header;
