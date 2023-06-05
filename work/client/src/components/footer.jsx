import React, { Component } from 'react';
import './css components/footer.css'
import  '@fortawesome/fontawesome-free';
import { Link } from 'react-scroll';



function Footer () {
    return (  
        <>
         <footer class="footer-distributed">

<div className='footer-left'>
    <h3>V<span>Lab</span></h3>

    <p class="footer-links">
       <Link to="home" smooth={true} duration={1000}>VLab</Link>
        |
       <Link to="approach" smooth={true} duration={1000}>Approche</Link>
        |
       <Link to="analyse" smooth={true} duration={1000}>Analyses</Link>
        |
       <Link to="principe" smooth={true} duration={1000}>Principes</Link>
    </p>

    <p class="footer-company-name">Copyright © 2023 <strong>VLab</strong> Tous droits réservés.</p>
</div>

<div class="footer-center">
    <div>
        <i className='fas fa-map-marker-alt'></i>
        <p><span>Casablanca</span></p>
    </div>

    <div>
        <i className="fas fa-phone"></i>
        <p>+212 696-451080 <br/> +212 669-891325</p>
    </div>
    <div>
        <i className="fas fa-envelope"></i>
        <p><a href="#">Vlabcontact@gmail.com</a></p>
    </div>
</div>
<div class="footer-right">
    <p class="footer-company-about">
        <span>A propos de nous:</span>
        <strong>VLab spécialisé dans l'analyse alimentaire, d'eau et agricole est équipé de technologies de pointe et d'une équipe de chercheurs expérimentés pour assurer une précision et une fiabilité maximales dans leurs analyses</strong> 
    </p>
    <div class="footer-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        
    </div>
</div>
</footer>
        </>
    );
}

export default Footer;