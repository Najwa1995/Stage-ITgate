import React from 'react'
import TourCard from '../mainpages/FeaturedTours/TourCard'
import './featuredtourslist.css'
import dataTours from '../assets/data/dataTours'
import { Col } from 'react-bootstrap'

const FeaturedToursList = () => {
    return (
        <>
            {
                dataTours.map((tour) =>
                    <Col lg="3" className='mb-4' key={tour.id}>
                        <TourCard tour={tour} />
                    </Col>)

            }
        </>

    )
}

export default FeaturedToursList