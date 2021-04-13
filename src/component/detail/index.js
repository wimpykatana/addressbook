import React from 'react';
import { Container,Row, Col } from 'reactstrap';
import './detail.css';

const Detail = (props) => {

    console.log(props.contactDetail);

    return (
        <Container className="justify-content-center">
            <Row className="justify-content-center contact">
                <Col className="card-card-colls"  md="4" xs="12">
                    <Row className="justify-content-center header-contact">

                        <Col className="propic-holder-detail justify-content-center">
                            <div style={{position:'absolute'}}>
                                <img className="propic-holder-detail-image" height="100px" src={props.contactDetail.picture.large} alt="propic_detail" />
                            </div>
                        </Col>


                    </Row>

                    <Row className="justify-content-center contact-detail">
                        <Col className="name-holder" xs="12" style={{textAlign: 'center'}}>
                            {props.contactDetail.name.first} {props.contactDetail.name.last}
                        </Col>

                        <Col className="address-holder" xs="12" style={{textAlign: 'center'}}>
                            {props.contactDetail.location.city} | {props.contactDetail.location.country}
                        </Col>

                        <Col className="email-holder" xs="12" style={{textAlign: 'center'}}>
                            {props.contactDetail.email}
                        </Col>
                    </Row>

                    <div className="close-it" onClick={props.closeMe}>X</div>
                </Col>


            </Row>

            
            
            
        </Container>
    );
}

export default Detail;