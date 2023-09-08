import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import SearchResult from '../pages/SearchResult'
import ToursDetails from '../pages/ToursDetails'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Thankyou from '../pages/Thankyou'



const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={< Home />} />
            <Route path='/tours/search' element={< Tours />} />
            <Route path='/tours' element={< Tours />} />
            <Route path='/searchResult' element={< SearchResult />} />
            <Route path='/tours/:id' element={< ToursDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path="/register" element={< Register />} />
            <Route path="/thank-you" element={< Thankyou />} />
        </Routes>
    )
}

export default Routers