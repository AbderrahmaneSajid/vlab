import React from 'react';
import img01 from "./images/chercher.png"
import img02 from "./images/une-analyse.png"
import "./css components/accep.css"
import { Link, useNavigate} from 'react-router-dom';

const Accesp = () => {
    const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/loginControle");  };

    const handleClick2 = () => {
        navigate("/loginAnalyse");  };

    return (
      <>
  
      
      
        <div id='comitance'>
            <div className='titrance1'><h3 className='boh'>A quelle comité vous appartenez ?</h3></div>
          
          <div className='bocont'>
          <div className='bo' onClick={handleClick1}>
            <span>
               <img src={img01}/>
               <h4>Comité Contrôle</h4>
            </span>
          </div>
           <div className='bo' onClick={handleClick2}>
            <span>
               <img src={img02}/>
               <h4>Comité Analyse</h4>
            </span>
        </div>
        </div>
        <Link to='/' className="l"><div className="fvt"><button className="fv">Accueil</button></div></Link>

        </div>

        </>
    );
}

export default Accesp;


