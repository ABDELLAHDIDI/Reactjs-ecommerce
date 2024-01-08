import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ViewAddressesHook from '../../hook/user/view-addresses-hook'
import UserAddressCard from './UserAddressCard'

const UserAllAddress = () => {
    const [res] = ViewAddressesHook()
    if (res.data)
        console.log(res)
    return (
        <div>
            <div className="admin-content-text pb-4">Livre annuel</div>
            {
                res.data ? (res.data.map((item, index) => {
                    return <UserAddressCard key={index} item={item} />
                })) : <h6>Il n'y a pas encore deux titres</h6>
            }

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">Extra du nouveau titre</button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllAddress