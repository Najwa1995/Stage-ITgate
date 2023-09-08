import React, { useState, useEffect } from 'react'
import './tour.css'
import AllTour from '../mainpages/AllTour'
import { Container, Row, Col } from 'react-bootstrap'
import SearchBar from '../mainpages/SearchBar'
import TourCard from '../mainpages/FeaturedTours/TourCard'
import DataTour from '../assets/data/dataTours'
import NewLetter from '../mainpages/NewLetters'
// import Pagination from './Pagination'

const Tours = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const pages = Math.ceil(5 / 4)
    setPageCount(pages)
  }, [page])
  return (
    <>

      <section >
        <div className="title1 ">
          < AllTour title={"All Tour"} />
        </div>
        < SearchBar />
        <Container className='tourcard'>
          <Row >

            {
              DataTour.map(tour => (
                <Col lg="3" key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            }

            <Col lg="12">
              <div className='pagination d-flex align-items-center
                justify-content-center gap-3 mt-4 '>
                {
                  [...Array(pageCount).keys()].map(number => (
                    <span key={number} onClick={() => setPage(number)}
                      className={page == number ? "active_page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))
                }
              </div>
            </Col>

          </Row>
        </Container>
      </section >
      <NewLetter />
    </>
  )
}

export default Tours