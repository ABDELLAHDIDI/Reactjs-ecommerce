import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import UserAllOrderCard from './UserAllOrderCard'
const UserAllOrderItem = ({ orderItem }) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
    return (
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">Demander le numéro #{orderItem.id || 0} ...Daté{formatDate(orderItem.createdAt)}</div>
            </Row>
            {
                orderItem.cartItems ? (orderItem.cartItems.map((item, index) => {
                    return <UserAllOrderCard key={index} item={item} />
                })) : null
            }

            <Row className="d-flex justify-content-between">
                <Col xs="6" className="d-flex">
                    <div>
                        <div className="d-inline"> Livraison</div>
                        <div className="d-inline mx-2 stat">{orderItem.isDelivered === true ? 'Livré' : 'n\'est pas terminer'}</div>
                    </div>
                    <div>
                        <div className="d-inline"> profitable</div>
                        <div className="d-inline mx-2 stat">{orderItem.isPaid === true ? 'Le paiement a été effectué' : 'n\'est pas terminer'}</div>
                    </div>

                    <div>
                        <div className="d-inline">la façon de payer</div>
                        <div className="d-inline mx-2 stat">{orderItem.paymentMethodType === 'cash' ? 'espèces' : 'carte de crédit'}</div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">{orderItem.totalOrderPrice || 0} DH</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderItem
