import React from 'react'
import '../stylesPages/home.css'
import Subtitle from '../mainpages/SousTitre'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import world from '../assets/images/world.jpg'
import SearchBar from '../mainpages/SearchBar';
import ServiceList from '../servicess/ServiceList'
import FeaturedTours from '../mainpages/FeaturedTours/FeaturedTours';
import FeaturedToursList from '../FeaturedTours/FeaturedToursList';
import GalleryImg from '../Image_Gallery/GalleryImg';
import FansLove from '../fanslove/FansLove';
import NewLetters from '../mainpages/NewLetters';
import Footer from '../Footer/footer';
import Header from '../Header/Header';

const Home = () => {
  return (
    <>

      {/* // *********************** premier section *********************** */}
      < Header />
      <section>

        <Container>
          <Row>
            <Col lg='6'>
              <div className='titre'>
                <div className="titre1 d-flex align-items-center">

                  <h3> <Subtitle subtitle={'Know Before You Go'} /></h3>

                  <img src={world} alt='' />
                </div>

                <h1> Traveling opens the door creating <span className='hightlight'>memories</span> </h1>
               
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.</p>
              </div>
            </Col>
            <Col lg='2'>
              <div className='img2-box '>
                <img src={img2} alt='' />

              </div>
            </Col>
            <Col lg='2'>
              <div className='img3-box mt-4'>
                <img src={img3} alt='' />

              </div>
            </Col>

            <Col lg='2'>
              <div className='img4-box mt-5'>
                <img src={img4} alt='' />
              </div>
            </Col>



          </Row>
        </Container>
      </section>

      {/* // ***************************2 eme section ********************* */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className='service_soustitre'>what we serve</h5>
              <h2 className='service_titre'> we offre our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ********************3eme section******ffeatured tour**** */}

      <section >
        <Container >
          <Row >
            <Col lg="12" className='mb-5 featured'>
              <h4> <Subtitle subtitle={'Explore'} /></h4>
              <h3 className='featured_tour'>Our featured tour</h3>
            </Col>
            <FeaturedToursList />
          </Row>
        </Container>
      </section>

      {/* ************** section experience ***** */}

      <section>
        <Container>
          <Row>
            <Col >
              <div className='experience'>
                <Subtitle subtitle={"Experience"} />
                <div className='experience-titre'>
                  <h2>With our all experience we will serve you</h2>
                </div>
                <div className='exp-1'>
                  <div className='exp-2'>
                    <span>15k +</span>
                    <h6>Successfull Trip</h6>
                  </div>
                  <div className='exp-2'>
                    <span>3k +</span>
                    <h6>Regular experience</h6>
                  </div>
                  <div className='exp-2'>
                    <span>15</span>
                    <h6>Years experience</h6>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* *******************section gallery **************** */}
      <section>
        <Container>
          <Row>
            <Col >
              <div className='gallery2'>
                < Subtitle subtitle={'Gallery'} />
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
              </div>
              <div className='gallery1'>
                <GalleryImg />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ********************Section Fans Love ****************** */}
      <section>
        <Container>
          <Row>
            <Col lg="12" >
              <Subtitle subtitle={"Fans Love"} />
              <h2> Lorem ipsum dolor sit amet. </h2>
            </Col>

            <Col lg="12">
              < FansLove />
            </Col>
          </Row>
        </Container>

      </section >
      {/* *******************Subscribe ******************* */}
      < NewLetters />

      {/* < Footer /> */}
    </>

  )
}


export default Home