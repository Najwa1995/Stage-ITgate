import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/footer'
import Routers from '../router/Routers'
import Tours from '../pages/Tours'
import Vols from '../pages/Vol'
import NavBar from '../Header/NavBar.jsx'

const Layout = () => {
  return (
    <>
      {/* < Header /> */}
      < NavBar />
      < Routers />
      < Footer />

    </>


  )
}

export default Layout