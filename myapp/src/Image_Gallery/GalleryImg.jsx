import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import gallery from './gallery'
import './gallery.css'

const GalleryImg = () => {
    return (

        <div className='gallery'>
            {gallery.map((item, index) => (
                <img src={item} key={index} className='gap-3' />
            ))}
        </div>
    )
}

export default GalleryImg