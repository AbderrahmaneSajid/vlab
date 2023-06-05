import React, { Component } from 'react';
import './css components/header.css'
import img from './images/laboratoiree.png'
function Header() {
    return ( 
        <section className='head' id='home'>
            <div className='headcontainer'>
               <div className='img77'><img src={img}/></div>
               <div className='headtexte'>
                   <h1 className='headtitle'>Votre confiance, notre expertise : 
                   <br/> <span id='Vtexte'>VLab</span>, l'analyse agro-alimentaire<br/>de référence.</h1>
                   <p className='headdesc'>Chez VLab, nous mettons notre expertise en analyse agroalimentaire au service de la qualité et de la sécurité de vos produits. Notre laboratoire équipé des technologies de pointe assure des résultats précis et fiables pour vous permettre de répondre aux exigences réglementaires et satisfaire vos clients.</p>
                    <a href='#' className='button'>Demande service</a>
               </div>
            </div>
        </section>
     );
}

export default Header;