import React from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Teaser from './Teaser/Teaser'
import Bity from './Bity/Bity'
import Houses from './Houses/Houses'
import Carousell from './Carousel/Carousell'
import TrustUs from './TrustUs/TrustUs'
import ContactUs from './ContactUs/ContactUs'
import Footer from './Footer/Footer'
import "../App.css"

const LandingPage = () => {
  return (
    <div className="App">
    
    <div style={{background:"#131110"}}>
    <div className="white-gradient" />
    <Header/>
    <Hero/>
    </div>
    <Teaser/>
    <Bity/>
    <Houses/>
    <Carousell/>
    <TrustUs/>
    <ContactUs/> 
    <Footer/>
    
    </div>
  )
}

export default LandingPage
