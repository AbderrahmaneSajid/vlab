import React from 'react';
import './css components/Contact.css'
import img1 from './images/email.png'
import img2 from './images/social.png'
import img3 from './images/telephone.png'
import img4 from './images/facebook.png'
import img5 from './images/instagram.png'
import img6 from './images/twitter.png'
import img7 from './images/loca.png'


function Contact() {
    return (  
<section id='ct'>
        <h3 id='Ctc'>COMMENT CONTACTER VLab ?</h3>
        <div className='Contact'>
            <div className='container'>
                <div className='ContactMoyen'>
                    <img src={img1}/>
                    <h3>EMAIL</h3>
                    <p id='txt'>Vous pouvez nous contacter en utilisant l'une des adresses suivantes:</p>
                    <p id='c'>VLabcontact@gmail.com <br/> VLaboratoire7@gmail.com</p>


                </div>
            </div>
            <div className='container'>
                <div className='ContactMoyen'>
                   <img src={img2}/>
                   <h3>RÉSEAUX SOCIAUX</h3>
                   <p id='txt'>Vous pouvez nous suivre dans les réseaux sociaux:</p>
                   <div className='socialmedia'>
                     <div className='sm'><img src={img4}/><p id='c'>/@VLaboratoire</p></div>
                     <div className='sm'><img src={img5}/><p id='c'>/@V_Lab</p></div>
                     <div className='sm'><img src={img6}/><p id='c'>/@V_Lab</p></div>
                   </div>
                </div>
            </div>
            <div className='container'>
                <div className='ContactMoyen'>
                   <img src={img3}/>
                   <h3>PHONE</h3>
                   <p id='txt'>Contactez notre service commercial dès maintenant au numéro de téléphone suivant:</p>
                   <p id='c'>+212 696-451080 <br/>+212 669-891325 </p>

                </div>
            </div>
        </div>
        <div class="location">
           <div class="location-icon">
              <img src={img7}/>
           </div>
           <div class="location-address">
               <div class="address">
                  <h3>Laboratoire D'Analyses Et De Recherches Veterinaires:</h3>
                   <p>Rue Ahmad Faris, Casablanca 20250 .</p>
               </div>
               <div class="address">
                   <h3>Laboratoire Officiel d’Analyses et de Recherches Chimiques :</h3>
                    <p>308, Bd Moukaouama - Ex Resistance Ang. Strasbourg, Casablanca 20100 .</p>
               </div>
          </div>
        </div>

        </section>
    );
}

export default Contact;