import React from 'react'
import './alltour.css'
import { Col, Row, Container } from 'react-bootstrap'
import SearchBar from './SearchBar'

const AllTour = ({ title }) => {
    return (
        <section mb-6>
            <Container >
                <Row >
                    <Col lg="12"  >
                        <h2>{title}</h2>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AllTour