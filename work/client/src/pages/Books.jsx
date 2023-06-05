import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./searchform.css"

const SearchForm = () => {
  const [searchType, setSearchType] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const [searchResults, setSearchResults] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const [allResults, setAllResults] = useState([]);
  const handleLogout = async () => {
    try {
      
      navigate("/loginControle")
      console.log('User logged out.');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      setSearchResults(searchResults.filter((book) => book.id !== Number(id)));
      setAllResults(allResults.filter((book) => book.id !== Number(id)));
      navigate(window.location.pathname, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchType === 'productName') {
      try {
        const response = await axios.get('http://localhost:8800/search', {
          params: { productName: searchValue },
        });
        setSearchResults(response.data);
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error searching for books by product name:', error);
      }
    } else if (searchType === 'labDestination') {
      try {
        const response = await axios.get('http://localhost:8800/search1', {
          params: { Labdestination: searchValue },
        });
        setSearchResults(response.data);
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error searching for books by laboratory destination:', error);
      }
    } else if (searchType === 'datePV') {
      try {
        const response = await axios.get('http://localhost:8800/search2', {
          params: { DatePV: searchValue },
        });
        setSearchResults(response.data);
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error searching for books by date PV:', error);
      }
    }

    setSearchType('');
    setSearchValue('');
  };

  return (
    <div>
      <div className='vlan'><h1>Espace Contrôle</h1></div>
      <div className='sc'>
      <div className="ajbc"><button className="ajb"><Link className="aj" to="/add">Ajouter un nouveau prélèvement</Link></button></div>
      <form className='formaaa' onSubmit={handleSubmit}>
        <select className='stype'
          name="searchType"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="">Select search type</option>
          <option value="productName">Product Name</option>
          <option value="labDestination">Laboratory Destination</option>
          <option value="datePV">Date PV</option>
        </select>
        {searchType === 'productName' && (
          <input className='inpose'
            type="text"
            placeholder="Product Name"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        )}
        {searchType === 'labDestination' && (
          <select
            name="labDestination"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          >
            <option value="">Select laboratory</option>
            <option value="LRAR">LRAR</option>
            <option value="LOARC">LOARC</option>
          </select>
        )}
        {searchType === 'datePV' && (
          <input className='inpose'
            type="date"
            placeholder="Date PV"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        )}
        <button className='botonan' type="submit">Search</button>
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
              <td>
                <button className="update">
                  <Link className="lien" to={`/update/${book.id}`}>
                    Mettre à jour
                  </Link>
                </button>
              </td>
              <td>
                <button className="delete" onClick={() => handleDelete(book.id)}>
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

export default SearchForm;


