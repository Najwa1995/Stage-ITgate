import React from 'react'
import './header.css'
import logo from '../assets/images/icon3.jpg'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
import img6 from '../assets/images/img6.jpg'
import SearchBar from '../mainpages/SearchBar';
import img20 from '../assets/images/img20.jpg'
import img21 from '../assets/images/img21.jpg'
import img22 from '../assets/images/img22.jpg'
import img11 from '../assets/images/img11.jpg'

const listLink = [

  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/about",
    display: "About"
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

const Header = () => {


  return (
    <>

      <Navbar expand="lg" className='fixed-top'>
        <Container>
          <Navbar.Brand >
            {/* <img src={logo} title="logo" /> */}
            <h2 >
              {/* {isAdmin ? 'Admin' : 'TravelDH'} */}
              <Link to="/"><span>Travel</span>DH</Link>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {listLink.map((item, index) => (
                <li className='nav_item' key={index}>
                  <NavLink to={item.path} className={navClass => navClass.isActive ? "active_Links" : ''}>{item.display}</NavLink>
                </li>
              ))}
            </Nav>
          </Navbar.Collapse>
          <div className='bouton'>
            <Nav id="btn1">
              <button type="button" className="btn btn-primary btn2"><Link className='btn2' to='/login'>login</Link></button>
              <button type="button" className="btn btn-secondary btn3"><Link className='btn3' to='/register'>Register</Link></button>
            </Nav>
          </div>
          <span className='mobile-menu'>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>


        </Container>
      </Navbar>
      <header>

        <div className='header-img'>
          <div className='titreg'>
            <h1>  Bienvenue sur dhahriBooking.com </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <SearchBar />
        </div>

      </header>


    </>

  )
}

export default Header





