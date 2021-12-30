import React from 'react';
import {Row,Col,Container,Button} from 'react-bootstrap';
import '../components/banner.scss';

const Banner = () => {
    return (
        <section className='banner'>
            <Container>
                <Row>
                    <Col className='position-relative mt-5 pt-5'>
                        <div className="content pt-5 mt-5 text-white">
                            <h1 className='mb-3'>Welcome to React World</h1>
                            <p className='para mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque <br /> exercitationem  velit eum facilis optio libero</p>
                            <Button className='bg-blue rounded-pill border-white text-white fs-6 fw-bold px-4 py-2'>React More</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
           
        </section>
    );
};

export default Banner;