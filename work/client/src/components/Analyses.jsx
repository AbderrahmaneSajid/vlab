import React from 'react';
import './css components/Analyses.css'
import img1 from './images/AnalyseAgricole.jpeg'
import img2 from './images/AnalyseAlimentaire.jpg'
import img3 from './images/AnalyseEau.jpg'
import img4 from './images/1.png'
import img5 from './images/2.png'
import img6 from './images/3.png'


function Analyses() {
    return ( 
    <section id='analyse'>
      <h3 id='V'>QUELLES SONT LES ANALYSES PROPOSÉES PAR VLab ?</h3>
      <div className='Analyse'>

         <div className='AnalyseTitre'>
           <p >VLAB offre aux professionnels des industries agricoles, alimentaires 
            et agro-environnementales une vaste sélection d'analyses.</p>
         </div>
        
        <div className='AnalysesPoints'>

            <div className='TypeAnalyse'>
              <div className='Container'>
                 <span>   
                   <div id='titre'> <img src={img4}/><h3>Analyses agricoles :</h3></div>
                   <p>Le laboratoire VLAB propose des analyses agricoles de haute qualité pour aider les agriculteurs à maximiser leur rendement et leur efficacité.<br/>Leurs analyses couvrent une gamme de tests, tels que la composition des sols, la présence de nutriments et de contaminants, et l'identification des maladies des cultures.<br/>Les résultats de ces analyses permettent aux agriculteurs de prendre des décisions éclairées sur la gestion des cultures, l'utilisation des engrais et des pesticides, et la sélection des variétés de cultures les mieux adaptées à leur environnement.<br/>Avec les services de VLAB, les agriculteurs peuvent obtenir des informations précieuses pour améliorer leur production et leur rentabilité, tout en minimisant leur impact sur l'environnement .</p>
                  </span>
                 <div className='Image'>
                    <img src={img1} alt='Image'/>
                 </div>
               </div> 
               
            </div>

            <div className='TypeAnalyse'>
               <div className='Container'>
               <span>
                  <div id='titre'><img src={img5}/><h3>Analyses alimentaires :</h3></div>
                  <p>Les analyses alimentaires sont un outil essentiel pour garantir la qualité et la sécurité des aliments que nous consommons. Les laboratoires spécialisés dans les analyses alimentaires, tels que ceux proposés par VLAB, effectuent des tests complets pour détecter la présence de contaminants, de résidus de pesticides et d'autres substances potentiellement nocives dans les aliments. Les analyses alimentaires sont également utilisées pour évaluer la composition nutritionnelle des aliments, y compris les niveaux de protéines, de graisses et de glucides.<br/>Ces informations peuvent aider les entreprises alimentaires à développer des produits plus sains et plus nutritifs pour les consommateurs. En fin de compte, les analyses alimentaires sont essentielles pour assurer la sécurité alimentaire et garantir que les aliments que nous mangeons sont de haute qualité et sans danger pour notre santé .</p>
              </span>
              <div className='Image'>
                 <img src={img2} alt='Image'/>  
              </div>
               </div>

              
            </div>

            <div className='TypeAnalyse'>
               <div className='Container'>
               <span>
                  <div id='titre'><img src={img6}/><h3>Analyses des eaux :</h3></div>
                  <p>Les analyses des eaux sont une étape cruciale pour assurer la qualité de l'eau potable et préserver la santé publique. Les laboratoires spécialisés dans les analyses des eaux, tels que VLAB, effectuent une gamme de tests pour évaluer la qualité de l'eau, y compris la présence de bactéries, de virus, de métaux lourds, de produits chimiques, et d'autres substances potentiellement nocives pour la santé humaine et l'environnement.<br/>Les analyses des eaux sont également utilisées pour vérifier la conformité avec les normes de qualité de l'eau et les réglementations environnementales en vigueur. En outre, les analyses des eaux sont également importantes pour les entreprises qui produisent des produits alimentaires et des boissons, car elles peuvent affecter la qualité des ingrédients utilisés dans ces produits. Les résultats des analyses des eaux fournissent des informations importantes pour garantir la sécurité et la qualité de l'eau potable, ainsi que pour soutenir une gestion responsable des ressources en eau .</p>
               </span>
               <div className='Image'>
                  <img src={img3} alt='Image'/> 
               </div>
               </div>
               

            </div>
        </div>
    </div>
     
    </section>
     );
}

export default Analyses;