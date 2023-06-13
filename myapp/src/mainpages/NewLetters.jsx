import React from 'react'
import './newsletter.css'
import { Container, Col, Row } from 'react-bootstrap'
import imgnew from '../assets/images/img11.jpg'

const NewLetters = () => {
    return (

        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className='newsletter_content'>
                            <h2>Subscribe now to get useful travelling information</h2>
                            <div className='newsletter_input'>
                                <input type='email' placeholder='enter your email' />
                                <button className='btn newsletter_btn' >Subcribe</button>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi, velit deserunt corrupti voluptatibus natus earum nostrum explicabo reiciendis! Sit consequatur vitae doloribus a, assumenda dignissimos cumque molestiae optio quisquam?</p>
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className=' newsletter_img'>
                            <img src={imgnew} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default NewLetters