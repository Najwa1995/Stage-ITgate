import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {

  const footer_Link = [

    {
      path: "/home",
      display: "Home"
    },

    {
      path: "/Tours",
      display: "Hotel"
    },

    {
      path: "/vol",
      display: "Vols"
    }

  ]

  const footer_Link1 = [

    {
      path: "/gallery",
      display: "Gallery"
    },
    {
      path: "/login",
      display: "Login"
    },
    {
      path: "/register",
      display: "Register"
    },


  ]
  const year = new Date().getFullYear()
  return (

    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3">
            <div className='logo'>
              <Link to="/"><span>Travel</span>DH</Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, in?</p>
              <div className='social_links d-flex align-items-center gap-4 mt-4'>
                <span>
                  <Link to='#'>
                    <i class="fa-brands fa-linkedin"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i class="fa-brands fa-github"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i class="fa-solid fa-envelope"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className='footer_title'>Discover</h5>
            <ListGroup className='footer_title1'>
              {
                footer_Link.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3'>
            <h5 className='footer_title'>Quick links</h5>
            <ListGroup className='footer_title1' >
              {
                footer_Link1.map((item, index) => (
                  <ListGroupItem key={index} className='footer_title1 ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer_title'>Contact</h5>

            <ListGroup className='footer_title1'>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-3  '>

                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="fa-solid fa-location-dot"></i></span>
                  Adresse:
                </h6>
                <p className='mb-0 gap-2'>Nafoura, Monastir-Tunis</p>
              </ListGroupItem>
            </ListGroup>

            <ListGroup className='footer_title1'>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-4 '>

                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="fa-solid fa-envelope"></i></span>
                  Gmail:
                </h6>
                <p className='mb-0 gap-2'>dhahrinajwa1995@gmail.com</p>
              </ListGroupItem>
            </ListGroup>

            <ListGroup className='footer_title1'>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-4 '>

                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="fa-solid fa-phone"></i></span>
                  Phone:
                </h6>
                <p className='mb-0 '>+216 95146817</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
            <p className='copyright '>Copyright {year}, developed by Dhari Najwa, All rights reserved </p>
          </Col>
        </Row>
      </Container>
    </footer>

  )
}

export default Footer