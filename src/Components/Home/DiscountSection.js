import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import ubuntu from '../../images/ubuntu.png'
const DiscountSection = () => {
    return (
        <Container>
            <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
                <Col sm="6">
                    <div className="discount-title">
            Réduction jusqu'à 30% sur la formation ubuntu
                    </div>
                </Col>
                <Col sm="6">
                    <img className="dicount-img" src={ubuntu} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default DiscountSection
