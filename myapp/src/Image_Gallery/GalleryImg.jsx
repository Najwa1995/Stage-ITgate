import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import gallery from './gallery'
import './gallery.css'

const GalleryImg = () => {
    return (
        <Container>
            <Row>
                <Col lg="12">
                    <div className='gallery gap-4'>
                        {gallery.map((item, index) => (
                            <img src={item} key={index} />
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default GalleryImg