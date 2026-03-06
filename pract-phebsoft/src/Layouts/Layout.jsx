import React from 'react'
import Header from '../Screens/Header'
import {Outlet} from 'react-router-dom'
import Footer from '../Screens/Footer'
import './Layout.css'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
      
  )
}

export default Layout
