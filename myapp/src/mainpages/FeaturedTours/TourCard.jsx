import React from 'react'
import './Tourcard.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import calculateAvgRating from '../../utils/avgRating';


const TourCard = ({ tour }) => {

    const { id, title, city, distance, price, maxGroupSize, desc, reviews, photo, featured } = tour
    const { totalRating, avgRating } = calculateAvgRating(reviews)




    return (

        <div className='tour-card'>
            <Card>
                <div className='tour-img'>
                    <img src={photo} alt='tour-img' />
                    {featured && <span>Featured</span>}

                </div>

                <Card.Body>
                    <div className='card-top d-flex align-items-center justify-content-between' >
                        <span className='tour-location d-flex align-items-center gap-1'>
                            <i className="fa-sharp fa-solid fa-location-dot"></i>{city}
                        </span>
                        <span className='tour-rating d-flex align-items-center gap-1'>
                            <i className="fa-solid fa-star"></i>
                            {avgRating == 0 ? null : avgRating}
                            {totalRating == 0 ? ("Not rated") : (<span>({reviews.length})</span>)}

                        </span>
                    </div>
                    <>
                        <h5 className='tour-title'><Link to={`/tours/${id}`} >{title}</Link></h5>
                    </>
                    <div className='card-bottom d-flex align-items-center justify-content-between mt-3'>

                        <h5>${price} <span>/per person</span></h5>

                        <button className='btn btn-booking'>
                            <Link to={`/tours/${id}`}>Book Now</Link>
                        </button>
                    </div>
                </Card.Body>
            </Card>


        </div>
    )
}

export default TourCard