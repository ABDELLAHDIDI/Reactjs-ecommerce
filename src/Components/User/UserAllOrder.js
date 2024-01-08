import React from 'react'
import { Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'
import UserGetAllOrderHook from './../../hook/user/user-get-all-order-hook';
import Pagination from './../Uitily/Pagination';

const UserAllOrder = () => {
    const [userName, results, paginate, orderData, onPress] = UserGetAllOrderHook()

    return (
        <div>
            <div className="admin-content-text pb-4">Nombre de demandes #{results}</div>
            <Row className='justify-content-between'>
                {
                    orderData.length >= 1 ? (orderData.map((orderItem, index) => {
                        return <UserAllOrderItem key={index} orderItem={orderItem} />
                    })) : <h6>Il n'y a même pas de demandes</h6>
                }

                {
                    paginate.numberOfPages >= 2 ? (<Pagination onPress={onPress} pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0} />) : null
                }


            </Row>
        </div >
    )
}

export default UserAllOrder