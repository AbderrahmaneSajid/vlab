import React from 'react';
import './css components/Assurer.css'
import img1 from './images/rapidité.png'
import img2 from './images/fiabilité.png'
import img3 from './images/expertise.png'
import img4 from './images/support.png'
function Assurer() {
    return (
      <section id='principe'>
        <h3 id='Pq'>POURQUOI VLab ?</h3>
        <div className='Assurer'>
         <div className='AssurerTitre'>
            <p>Notre équipe est composée de professionnels hautement qualifiés qui travaillent avec passion et dévouement pour répondre à vos besoins.<br/>
               Nous sommes engagés à offrir une expérience personnalisée, efficace et satisfaisante à chacun de nos clients en assurant :</p>
         </div>
         

         <div className='AssurerPoints'>
            <div className='Point'>
               <span>
                 <img src={img1} alt='image'/>
                 <h3>LA RAPIDITÉ</h3>
                 <p>Notre laboratoire offre des résultats d'analyse avec une rapidité inégalée pour répondre aux besoins urgents de nos clients.</p>
               </span>
            </div>

            <div className='Point'>
               <span>
                <img src={img2} alt='image'/>
                <h3>LA FIABILITÉ</h3>
                <p>La fiabilité est au cœur de notre laboratoire, chaque échantillon est traité avec soin et précision pour garantir des résultats fiables à nos clients.</p>
               </span>  
            </div>

            <div className='Point'>
                <span>
                   <img src={img3} alt='image'/>
                   <h3>L'EXPERTISE</h3>
                   <p>Nous offrons un support client exceptionnel pour répondre à toutes les questions et préoccupations de nos clients tout au long du<br/>processus d'analyse.</p>
                </span>
            </div>

            <div className='Point'>
                <span>
                  <img src={img4} alt='image'/>
                  <h3>LE SUPPORT</h3>
                  <p>Notre laboratoire s'appuie sur des années d'expérience et d'expertise pour fournir des résultats précis et fiables à nos clients.</p>
                </span>     
            </div>
            
           </div>
         

        </div>
        </section>
       
     );
}

export default Assurer;