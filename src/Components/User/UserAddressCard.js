import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deleteicon from '../../images/delete.png'
import { useDispatch } from 'react-redux';
import { deleteUserAddress } from './../../redux/actions/userAddressesAction';
import DeleteAddressHook from './../../hook/user/delete-address-hook';
const UserAddressCard = ({ item }) => {

    const [show, handleClose, handleShow, handelDelete] = DeleteAddressHook(item._id)

    return (
        <div className="user-address-card my-3 px-2">

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title> <div className='font'>Confirmer la suppression</div></Modal.Title>
                </Modal.Header>
                <Modal.Body><div className='font'>Êtes-vous sûr de l'adresse du processus de suppression</div></Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" onClick={handleClose}>
                        se retirer
                    </Button>
                    <Button className='font' variant="dark" onClick={handelDelete}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className="d-flex justify-content-between  ">
                <Col xs="6">
                    <div className="p-2">{item.alias}</div>
                </Col>
                <Col xs="6" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                        <Link to={`/user/edit-address/${item._id}`} style={{ textDecoration: 'none' }}>
                            <div className="d-flex mx-2">
                                <img
                                    alt=""
                                    className="ms-1 mt-2"
                                    src={deleteicon}
                                    height="17px"
                                    width="15px"
                                />
                                <p className="item-delete-edit"> amendement</p>

                            </div>
                        </Link>
                        <div onClick={handleShow} className="d-flex ">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> Supprimer</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "14px",
                        }}>
                        {item.details}
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                       Numéro de téléphone:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {item.phone}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddressCard
