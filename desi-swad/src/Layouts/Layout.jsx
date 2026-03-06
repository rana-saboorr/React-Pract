import React from 'react'
import Header from '../FixedLayout/Header.jsx'
import {Outlet} from 'react-router-dom'
import Footer from '../FixedLayout/Footer'
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
