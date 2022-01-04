import React from 'react';
import {Row,Col,Container,Button} from 'react-bootstrap';
import '../components/banner.scss';

const Banner = () => {
    return (
        <section className='banner'>
            <Container>
                <Row>
                    <Col className='position-relative mt-md-5 mt-2 pt-md-5 pt-1'>
                        <div className="content pt-2 pt-md-0 pt-lg-5 mt-4 mt-md-3 mt-lg-5 text-white">
                            <h1 className='mb-3'>Welcome to React World</h1>
                            <p className='para mb-md-5 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque <br /> exercitationem  velit eum facilis optio libero</p>
                            <Button className='bg-blue rounded-pill border-white text-white fs-6 fw-bold px-4 py-2'>React More</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
           
        </section>
    );
};

export default Banner;