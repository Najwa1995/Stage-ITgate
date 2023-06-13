import React, { useState } from 'react'
import './Login.css'
import { Container, Col, Row, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from "axios"

function Register() {
  const [user, setUser] = useState({
    firstname: '', lastname: '', email: '', password: ''
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const registerSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/api/register', { ...user })

      localStorage.setItem('firstLogin', true)


      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg)
    }
  }

  return (
    <>
      <Container>
        <Col lg="3" className=' form-login align-items-center' >
          <Form className=' align-items-center' onSubmit={registerSubmit}>
            <h2>Register</h2>
            <input type='firstname' name='firstname' placeholder='enter your firstname'
              required value={user.firstname} onChange={handleChange} />

            <input type='lastname' name='lastname' placeholder='enter your lastname'
              required value={user.lastname} onChange={handleChange} />

            <input type='email' name='email' placeholder='enter your email'
              required value={user.email} onChange={handleChange} />

            <input type='password' name='password' required placeholder='enter your password'
              value={user.password} autoComplete='on' onChange={handleChange} />

            <div className='btn-login d-flex gap-3'>
              <button type='submit' >Register</button>
              <Link to="/login">Login</Link>
            </div>
          </Form>
        </Col>
      </Container>
    </>
  )
}

export default Register