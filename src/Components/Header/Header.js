import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>
            <img src='./logo.png' alt='logo' width={120} />

            <div className='flexCenter h-menu'>
            <a href=''>Residencies</a> 
            <a href=''>Our Value</a> 
            <a href=''>Contact Us</a> 
            <Link to="/login">Get Started</Link>
            <button className='button'>
            <a href=''>Contact</a> 
            </button>
            
            </div>
        </div>
    </section>
  )
}

export default Header
