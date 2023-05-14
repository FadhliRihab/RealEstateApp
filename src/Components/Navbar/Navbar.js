import React from 'react'
import { Link } from 'react-router-dom'
import "../Header/Header.css"

const Navbar = () => {
  return (
    <section className='h-wrapper' style={{backgroundColor:"#131110"}}>
    <div className='flexCenter paddings innerWidth h-container'>
        <img src='./logo.png' alt='logo' width={120} />

        <div className='flexCenter h-menu'>
        <Link to="/properties">Properties</Link>
        <Link to="/profile">Profile</Link> 
        <Link to="/">Log Out</Link>
        
        </div>
    </div>
</section>
  )
}

export default Navbar
