import React, { Component } from 'react';
import './css components/approche.css'
function Approche() {
    return (  
        <>
        <section className="approach">
  <h2 id='apptitre'>QU'ELLE EST L'APPROCHE ADOPTÉE PAR VLab?</h2>
  <div className="steps">
    <div className="step">
      <h3 id='steptitre'>Étape 1: Consultation initiale</h3>
      <p id='steptexte'>Nous vous rencontrons pour discuter  vos besoins et exigences en matière de test.</p>
    </div>
    <div className="step">
      <h3 id='steptitre'>Étape 2: Collecte d'échantillons</h3>
      <p id='steptexte'>Nous prélevons des échantillons à votre emplacement en enregistrant les informations de prélevement sur place..</p>
    </div>
    <div className="step">
      <h3 id='steptitre'>Étape 3: Préparation des échantillons</h3>
      <p id='steptexte'>Nous préparons les échantillons pour l'analyse en utilisant des méthodes standard de l'industrie.</p>
    </div>
    <div className="step">
      <h3 id='steptitre'>Étape 4: Analyse des échantillons</h3>
      <p id='steptexte'>Nous effectuons l'analyse à l'aide d'équipements et des techniques de pointe.</p>
    </div>
    <div className="step">
      <h3 id='steptitre'>Étape 5: Interprétation des résultats</h3>
      <p id='steptexte'>Nous vous fournissons des rapports de résultats clairs et concis, y compris toute interprétation et recommandations nécessaires.</p>    </div>
  </div>
</section>

        </>
    );
}

export default Approche;