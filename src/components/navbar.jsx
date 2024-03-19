import React from 'react'
import './navbar.css';
import logo from '../logo.png';

const Navbar = () => {
  return (
    <nav className='nav'>
        {/* Logo and brand name */}
        <a href="/" className='brand'>
            <img src={logo} alt='logo' className='logo'></img>
            <div>STOCKSTREAM</div>
        </a>

        {/* Navigation list */}
        <ul className='nav_menu'>
            <li><a href='/home' className='navlink'>Home</a></li>
            <li><a href='/about'className='navlink'>About</a></li>
            <li><a href='/contact' className='navlink'>Contact</a></li>
        </ul>

        {/* Logout/Login button */}
        <button className='btn'>Login</button>
    </nav>
  )
}

export default Navbar