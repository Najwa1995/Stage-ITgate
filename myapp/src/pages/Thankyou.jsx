import React from 'react'
import { Container, Col, Row, Button } from "react-bootstrap"
import '../stylesPages/thankyou.css'
import { Link } from "react-router-dom"
const Thankyou = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank1">
              <span><i class="fa-solid fa-check"></i></span>
              <h1 className='mb-3 fw-semibold'>Thank You</h1>
              <h3 className='mb-4'> your tour is booked.</h3>
              <Button className='btn primary_btn w-25'><Link to="/home" >Back to Home</Link></Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  )
}

export default Thankyou