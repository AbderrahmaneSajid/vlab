import React, { Component } from 'react';

import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './css components/navbar.css'
function Navbar() {
    return(
    <header className="header">
        <a href="#" className="logo"><span className='V'>V</span>Lab.</a>
        <nav className="navbar">
        <Link to="home" smooth={true} duration={1000} className='s'>Accueil</Link>
        <Link to="Services" smooth={true} duration={1000}>Demande de service</Link>
        <Link to="ct" smooth={true} duration={1000}>Contact</Link>
        <RouterLink to="/Accesprivé" smooth={true} duration={1000}>Accès privé</RouterLink>
    </nav>
 </header>)
    
  }
export default Navbar;