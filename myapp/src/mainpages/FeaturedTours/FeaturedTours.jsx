import React from 'react'
import { Col } from 'react-bootstrap'
import './featuredtours.css'

const toursData = [
    {
        id: 1,
        title: 'Tour 1',
        city: 'City 1',
        price: 100,
        reviews: 5,
        maxGroupSize: 10,
        featured: true
    },
    {
        id: 2,
        title: 'Tour 2',
        city: 'City 2',
        price: 200,
        reviews: 10,
        maxGroupSize: 15,
        featured: false
    },
    // Add more tour objects as needed
];

const FeaturedTours = () => {

    return (
        <div className='featuredTours'>
            {toursData.map((tour) => (
                <Col lg="3" className='mb-4 ' key={tour.id}>

                    <h2>{tour.title}</h2>
                    <p>City: {tour.city}</p>
                    <p>Price: {tour.price}</p>
                    <p>Reviews: {tour.reviews}</p>
                    <p>Max Group Size: {tour.maxGroupSize}</p>
                    {tour.featured && <p>Featured</p>}

                    <hr />
                </Col>
            ))}
        </div>
    )
}

export default FeaturedTours