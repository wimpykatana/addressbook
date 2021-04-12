import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./item.css";

const Item = ( props ) => {


    return (
        <>
        <Container>
            <Row className="justify-content-center" style={{margin: '20px'}}>
                <Col className="item-list propic-holder" md="3" xs="12" style={{display: 'flex', justifyContent: 'center'}}>
                    <img src="https://randomuser.me/api/portraits/men/61.jpg" alt="propic" />
                </Col>
                <Col className="item-list detail-holder" md="9" xs="12">
                    <p className="name-holder">brad gibson</p>
                    <p className="email-holder">ralf.stevens@example.com</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Item;
