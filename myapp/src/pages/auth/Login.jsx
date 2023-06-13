import React, { useState } from 'react'
import './Login.css'
import { Container, Col, Row, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from "axios"


function Login() {

  const [user, setUser] = useState({
    email: '', password: ''
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }


  const loginSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/api/login', { ...user }).then(console.log('success'))
      localStorage.setItem('firstLogin', true)
      window.location.href = "/"

    } catch (err) {
      alert(err.response.data.msg)
      // console.log(err)
    }
  }




  return (
    <>
      <Container>
        <Col lg="3" className=' form-login align-items-center' >
          <Form className=' align-items-center' onSubmit={loginSubmit}>
            <h2>Login</h2>
            <input type='email' name='email' placeholder='enter your email'
              required value={user.email} onChange={handleChange} />

            <input type='password' name='password' required placeholder='enter your password'
              value={user.password} autoComplete='on' onChange={handleChange} />

            <div className='btn-login d-flex gap-3'>
              <button type='submit' >Login</button>
              <Link to="/register">Register</Link>
            </div>
          </Form>
        </Col>
      </Container>
    </>

  )
}



export default Login