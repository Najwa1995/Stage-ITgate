import React, { useState, useRef } from 'react';
import './searchBar.css'
import { Col, Form, FormGroup } from 'react-bootstrap'



const SearchBar = () => {

  const locationRef = useRef('');
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);


  const searchHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert('All Fieled are required!')
    }
  }
  return (
    <Col lg='12'>
      <div className='search-bar'>
        <Form className='d-flex align-items-center gap-4'>
          <FormGroup className='d-flex gap-3 form_group form_group1'>
            <span>
              <i className="fa-solid fa-map-location-dot"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type='text' placeholder='where you are going?' ref={locationRef} />
            </div>
          </FormGroup>

          <FormGroup className='d-flex gap-3 form_group form_group1'>
            <span><i className="fa-solid fa-location-dot"></i></span>
            <div>
              <h6>Distance</h6>
              <input type='number' placeholder='Distance k/m' ref={distanceRef} />
            </div>
          </FormGroup>


          <FormGroup className='d-flex gap-3 form_group form_group3'>
            <span><i className="fa-solid fa-people-group" ></i></span>
            <div>
              <h6>Max Peapol</h6>
              <input type='number' placeholder='0' ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <span className='search_icon' type='submit' onClick={searchHandler}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </Form>
      </div>
    </Col >

  )
}

export default SearchBar