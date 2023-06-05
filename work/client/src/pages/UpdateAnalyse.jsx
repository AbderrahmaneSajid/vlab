import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    datePV: null,
      numPV : null,
      typeP: "",
      cadre: "",
      produit: "",
      cadreP: "",
      niveau: "",
      recherche: "",
      labdestination: "",
      dateEnvoi: null,
      cover: "",
      EtatDav : "",
      NumBA: null,
      DateEdBA: null,
      Conformité: "",
      Nonconf: "",
      DateTA: null,
      NumTA: null,
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/booksA/${bookId}`, book);
      navigate("/analyse");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
<div className='H'><h1>Analyse du prélévement</h1></div>    <div className="form">
      
      <div className="f">
      <h3>Etat d'avancement :</h3>
      <select name='EtatDav' value={book.EtatDav} onChange={handleChange}>
      <option value='g'>Selectionner Etat d'avencement</option>

          <option value='En instance d analyse '>En instance d'analyse</option>
          <option value='Analyse terminée'>Analyse terminée</option>
          </select> 
      </div>
      <div className="f">
      <h3>Numéro BA :</h3>
      <input type='number' 
            placeholder='NumBA'
            name='NumBA'
            onChange={handleChange} />
      </div>
      <div className="f">
      <h3>Date d'édition BA :</h3>
      <input type='date' 
            placeholder='DateEdBA'
            name='DateEdBA'
            onChange={handleChange} />
      </div>
      <div className="f">
      <h3>Conformité :</h3>
      <select name='Conformité' value={book.Conformité} onChange={handleChange}>
      <option value='g'>Selectionner conformité</option>

          <option value='Conforme'>Conforme</option>
          <option value='Non conforme'>Non conforme</option>
          </select> 
      </div>
      <div className="f">
      <h3>La Non Conformité :</h3>
      <input type='text' 
            placeholder='Nonconf'
            name='Nonconf'
            onChange={handleChange} />
       </div>
       <div className="f">
       <h3>Date TA :</h3>
        <input type='date' 
            placeholder='DateTA'
            name='DateTA'
            onChange={handleChange} />
        </div>
        <div className="f">
            <h3>Numéro TA :</h3>
          <input type='number' 
            placeholder='NumTA'
            name='NumTA'
            onChange={handleChange} />
          </div> 
          </div>  
      <div className="enr"><button onClick={handleClick} className="formButton">Enregistrer</button></div>
      {error && "Something went wrong!"}
       <div className="enrl"><Link className="vp" to="/analyse">Voir tous les prélévements</Link></div>
    
    </>
  );
};

export default Update;