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
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate("/controle");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div>  
    <div className="H">  <h1>Mettre à jour prélevement</h1></div>
  
    <div className='form'>
       
         
       <div className='f'>
        <h3>Date de Prélévement :</h3>
        <input type='date'
         placeholder='datePV'
         name='datePV'
         onChange={handleChange} />
         </div>
        <div className='f'>
         <h3>Numéro de Prélévement :</h3>
        <input type='number' 
        placeholder='numPV'
        name='numPV'
        onChange={handleChange} />
        </div>
        <div className='f'>
       <h3>Type de Prélèvement :</h3>
        <select name='typeP'value={book.typeP} onChange={handleChange}>
        <option value='hP'>Selectionner le type</option>
        <option value='P'>Prélèvement de controle (P)</option>
        <option value='S'>Recherche spéciale (RS)</option>
        </select>
        </div>

       <div className='f'>
        <h3>Cadre de controle :</h3>
        <select name='cadre' value={book.cadre} onChange={handleChange}>
        <option value='cc'>Selectionner le cadre</option>
        <option value='PC1'>PC1</option>
        <option value='PC2'>PC2</option>
        <option value='PC3'>PC3</option>
        <option value='FLA'>FLA</option>
        <option value='A'>A</option>
        <option value='PMIC'>PMIC</option>
        <option value='PPF'>PPF</option>
        </select>
        </div>
       <div className='f'>
        <h3>Produit :</h3>
        <input type='text' 
        placeholder='produit'
        name='produit'
        onChange={handleChange} />
        </div>
       <div className='f'>
        <h3>Catégorie du Produit :</h3>
        <input type='text' 
        placeholder='cadreP'
        name='cadreP'
        onChange={handleChange} />
        </div>
       <div className='f'>
        <h3>Niveau de Prélèvement:</h3>
        <select name='niveau' value={book.niveau} onChange={handleChange}>
        <option value='NIV'>Selectionner le niveau</option>

        <option value='GMS'>GMS</option>
        <option value='G'>G</option>
        <option value='D'>D</option>
        <option value='P'>P</option>
        <option value='A'>A</option>
        <option value='E'>E</option>
        
        </select>
        </div>
       <div className='f'>
        <h3>Recherche demandée :</h3>
        <input type='text' 
        placeholder='recherche'
        name='recherche'
        onChange={handleChange} />
        </div>
       <div className='f'>
        <h3>Laboratoire de Destination :</h3>
        <select name='labdestination' onChange={handleChange}>
        <option value='S'>Selectionner le laboratoire</option>

        <option value='LRAR'>LRAR</option>
        <option value='LOARC'>LOARC</option>
        </select>
        </div>
       <div className='f'>
        <h3>Date d'envoi :</h3>
        <input type='date' 
        placeholder='dateEnvoi'
        name='dateEnvoi'
        onChange={handleChange} />
        </div>
        
    </div>
    <div className='buttoncont'><button className="add" onClick={handleClick}>Modifier</button></div>
     {error && "Something went wrong!"}
     <div className="enrl"><Link className="voir" to="/controle">Voir les prélèvements enregistrés</Link></div>
    </div>
  );
};

export default Update;