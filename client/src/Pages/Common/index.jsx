import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import './navbar.scss';



function Index() {
  return (
   <>
   <Navbar/>

   <div style={{marginTop:89}}>  <Outlet/></div>
   <Footer/>
   </>
   
  )
}

export default Index