import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Search.css"
import { Link, useNavigate } from "react-router-dom";
const SearchFormA = () => {
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
  const handleLogout = async () => {
    try {
      navigate("/loginAnalyse")
      console.log('User logged out.');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  const [EtatDAV, setEtatDAV] = useState('');
  const [NumeroBA, setNumeroBA] = useState('');
  
  const [searchResults, setSearchResults] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const navigate = useNavigate();
  const [allResults, setAllResults] = useState([]);

  useEffect(() => {
    // Fetch all items initially when component mounts
    fetchAllItems();
  }, []);

  const fetchAllItems = async () => {
    try {
      const response = await axios.get('http://localhost:8800/books');
      setAllResults(response.data);
    } catch (error) {
      console.error('Error fetching all items:', error);
    }
  };
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      setSearchResults(searchResults.filter(book => book.id !== Number(id)));
      setAllResults(allResults.filter(book => book.id !== Number(id)));
      navigate(window.location.pathname, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleSubmit1 = async e => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8800/search3', {
        params: { EtatDAV }
      });
      setSearchResults(response.data);
      setIsSubmitted(true); // Set submission status to true

    } catch (error) {
      console.error('Error searching for books:', error);
    }
  };
  const handleSubmit2 = async e => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8800/search4', {
        params: { NumeroBA }
      });
      setSearchResults(response.data);
      setIsSubmitted(true); // Set submission status to true

    } catch (error) {
      console.error('Error searching for books:', error);
    }
  };

  return (
    <div>
    <div className='vlav'><h1>Espace Analyse</h1></div>
     <div className='conteneur'>
      <form onSubmit={handleSubmit1}>
<select className='contetype'    name='EtatDav' value={EtatDAV} onChange={e => setEtatDAV(e.target.value)}>
  <option value='g'>Selectionner Etat</option>
  <option value='En instance d analyse '>En instance d'analyse</option>
  <option value='Analyse terminée'>Analyse terminée</option>
</select>
      <button className='bito' type="submit">Search</button>
    </form>
    <form onSubmit={handleSubmit2}>
      <input className='eho'
        type="number"
        placeholder="Numero BA"
        value={NumeroBA}
        onChange={e => setNumeroBA(e.target.value)}
      />
      <button className='bito' type="submit">Search</button>
    </form>
      </div>
      <table className="book-table">
        <thead>
          <tr>
            <th>Date de Prélévement</th>
            <th>Numéro de Prélévement</th>
            <th>Type de Produit</th>
            <th>Cadre</th>
            <th>Produit</th>
            <th>Cadre du Produit</th>
            <th>Niveau</th>
            <th>Recherche</th>
            <th>Laboratoire de Destination</th>
            <th>Date d'envoi</th>
            <th>Etat d'avancement</th>
            <th>Numéro BA</th>
            <th>Date d'édition BA</th>
            <th>Conformité</th>
            <th>La Non Conformité</th>
            <th>Date TA</th>
            <th>Numéro TA</th>
          </tr>
        </thead>
        <tbody>
          {(searchResults.length > 0 ? searchResults : allResults).map((book) => (
            <tr key={book.id}>
              <td>{book.datePV}</td>
              <td>{book.numPV}</td>
              <td>{book.typeP}</td>
              <td>{book.cadre}</td>
              <td>{book.produit}</td>
              <td>{book.cadreP}</td>
              <td>{book.niveau}</td>
              <td>{book.recherche}</td>
              <td>{book.labdestination}</td>
              <td>{book.dateEnvoi}</td>
              <td>{book.EtatDav}</td>
              <td>{book.NumBA}</td>
              <td>{book.DateEdBA}</td>
              <td>{book.Conformité}</td>
              <td>{book.Nonconf}</td>
              <td>{book.DateTA}</td>
              <td>{book.NumTA}</td>
              <td>
              <button className="update"><Link className="anal" to={`/updateA/${book.id}`}>Analyser</Link></button>

              </td>
              <td>
                <button
                  className="delete"
                  onClick={() => handleDelete(book.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='lgt'><button className='logout' onClick={handleLogout}>Logout</button></div>

    </div>
  );
};

export default SearchFormA;
