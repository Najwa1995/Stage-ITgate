import React, { useState } from 'react'
import './booking.css';
import { Col, Row, Container, ListGroupItem, Form, FormGroup, ListGroup } from 'react-bootstrap'

import { useNavigate, Link, useRoutes } from 'react-router-dom'


const Booking = ({ tour, avgRating }) => {

    const { price, reviews } = tour
    const navigate = useNavigate(0)
    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'najwa@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    })
    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const serviceFee = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)

    // send data to server
    const handleClick = e => {
        e.preventDefault();
        navigate('/thank-you');

    }
    return (

        <>
            <div className='booking'>
                <div className='booking1 d-flex align-items-center justify-content-between'>
                    <h3>${price} <span>/per person</span></h3>
                    <span className='tour-rating d-flex align-items-center '>
                        <i className="fa-solid fa-star" ></i>
                        {avgRating === 0 ? null : avgRating}({reviews?.length})

                    </span>
                </div>
                {/* ************booking  form*************** */}
                <div className='booking_form'>
                    <h5>Information</h5>
                    <Form className='booking_form1' onSubmit={handleClick}>
                        <FormGroup className='mb-2'>
                            <input type='text' placeholder=' Name' id='fullnName'
                                required onChange={handleChange} />
                        </FormGroup>
                        <FormGroup className='mb-2'>
                            <input type='number' placeholder=' phone' id='phone'
                                required onChange={handleChange} />
                        </FormGroup>
                        <FormGroup className='d-flex align-items-center gap-3'>
                            <input type='date' placeholder=' ' id='bookAt'
                                required onChange={handleChange} />
                            <input type='number' placeholder='guest' id='guestSize'
                                required onChange={handleChange} />
                        </FormGroup>

                    </Form>
                </div>
                {/* ******** booking botton************ */}
                <div className="booking_bottom">
                    <ListGroup >
                        <ListGroupItem className='border-0 px-0 booking_bottom1'>
                            <h5 className='d-flex align-item-center gap-1'>${price}<i class="fa-solid fa-xmark"></i>1 person</h5>
                        </ListGroupItem>
                        <ListGroupItem className='border-0 px-0 booking_bottom1'>
                            <h5>Service charge</h5>
                            <span>${serviceFee}</span>
                        </ListGroupItem>
                        <ListGroupItem className='border-0 px-0 booking_bottom1 total'>
                            <h5>Total</h5>
                            <span>${totalAmount}</span>
                        </ListGroupItem>
                    </ListGroup>
                    <button type="button" className="btn btn-warning mt-6" onClick={handleClick}> Book Now</button>

                </div>


            </div>
        </>
    )
}

export default Booking