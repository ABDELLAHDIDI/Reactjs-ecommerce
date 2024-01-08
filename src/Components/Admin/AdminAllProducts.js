import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProducts = ({ products }) => {
   
    return (
        <div>
            <div className='admin-content-text'>Gérer tous les produits</div>
            <Row className='justify-content-start'>
                {
                    products ? (
                        products.map((item, index) => <AdminAllProductsCard key={index} item={item} />)
                    ) : <h4>Il n'y a pas encore de produits</h4>
                }

            </Row>

        </div>
    )
}

export default AdminAllProducts
