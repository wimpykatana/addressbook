import React from 'react';
import { Row, Col } from 'reactstrap';
import "./item.css";

const Item = ( props ) => {


    return (
        <Row className="justify-content-center" style={{margin: '20px'}} onClick={props.clickDetail}>
            <Col className="item-list propic-holder" md="3" xs="12" style={{display: 'flex', justifyContent: 'center'}}>
                <img src={props.propic.large} alt="propic" />
            </Col>
            <Col className="item-list detail-holder" md="9" xs="12">
                <p className="name-holder">{props.firstName} {props.lastName}</p>
                <p className="email-holder">{props.email}</p>
            </Col>
        </Row>
    );
}

export default Item;
