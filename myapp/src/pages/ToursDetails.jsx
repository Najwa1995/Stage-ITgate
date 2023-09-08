import React, { useRef, useState } from 'react'
import './tourdetail.css'
import { useParams } from 'react-router-dom'
import { Col, Row, Container, ListGroup, Form } from 'react-bootstrap'
import DataTour from '../assets/data/dataTours'
import CalculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'

const ToursDetails = () => {

  const { id } = useParams();
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(0)

  //this is sttic data
  const tour = DataTour.find(tour => tour.id === id)


  const { photo, desc, price, reviews, title, adresse, city, distance, maxGroupSize } = tour
  const { totalRating, avgRating } = CalculateAvgRating(reviews)

  // format date
  const options = { day: "numeric", month: "long", year: "numeric" }
  // envoyer requete ----> server
  const submitHandler = e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;
    alert(`${reviewText}, ${tourRating}`)
    // // 

  }
  return (
    <>
      <Container>
        <Row>
          <Col lg="8">
            <div className='tour-content'>
              <img src={photo} alt='' />
              <div className='tour-info'>
                <h2>{title}</h2>

                <div className='d-flex align-items-center gap-5'>
                  <span className='tour-rating d-flex align-items-center gap-1'>
                    <i className="fa-solid fa-star" style={{ color: "orange" }}></i>

                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? ("Not rated") : (<span>({reviews?.length})</span>)}
                  </span>
                  <span>
                    <i className="fa-solid fa-location-dot"></i>{adresse}
                  </span>
                </div>

                <div className='tour-details'>
                  <span><i className="fa-solid fa-building"></i>{city}</span>
                  <span><i className="fa-solid fa-dollar-sign"></i>${price}/per person</span>
                  <span><i className="fa-sharp fa-solid fa-map"></i>{distance} k/m</span>
                  <span><i className="fa-solid fa-user-group"></i>{maxGroupSize} people</span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              {/* **************tour reviews section */}
              <div className='tour_reviews mt-4'>
                <h4>Reviews ({reviews.length} reviews)</h4>

                <Form onSubmit={submitHandler}>
                  <div className='d-flex align-items-center gap-3 mb-4 reviews-form'>
                    <span onClick={() => setTourRating(1)}> 1 <i className="fa-solid fa-star"></i></span>
                    <span onClick={() => setTourRating(2)}> 2 <i className="fa-solid fa-star"></i></span>
                    <span onClick={() => setTourRating(3)}> 3 <i className="fa-solid fa-star"></i></span>
                    <span onClick={() => setTourRating(4)}> 4 <i className="fa-solid fa-star"></i></span>
                    <span onClick={() => setTourRating(5)}> 5 <i className="fa-solid fa-star"></i></span>

                  </div>
                  <div className='reviews-input'>
                    <input type='text' placeholder='share your thoughts' ref={reviewMsgRef} required />
                    <button type="submit" className="btn btn-primary text-white" >Submit</button>
                  </div>
                </Form>

                <ListGroup className='user_review'>
                  {
                    reviews.map(review => (
                      <div className='review_item' >
                        <img src={avatar} alt='' />
                        <div className='w-100'>
                          <div className='d-flex align-item-center justify-content-between'>
                            <div>
                              <h5>Najwa</h5>
                              <p>
                                {new Date("01-08-2023").toLocaleDateString("en-US", options)}
                              </p>
                            </div>
                            <span className='d-flex align-items-center'>
                              5 <i className="fa-solid fa-star"></i>
                            </span>
                          </div>
                          <h6>Amazing tour</h6>
                        </div>
                      </div>
                    ))
                  }
                </ListGroup>
              </div>

            </div>
          </Col>

          <Col lg="4">
            <Booking tour={tour} avgRating={avgRating} />
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default ToursDetails