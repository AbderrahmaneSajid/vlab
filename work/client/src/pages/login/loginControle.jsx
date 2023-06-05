
import REACT ,{ useContext, useState ,useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authcontext";
import "./loginControle.css";
import img1 from './img/avatar.svg'
import img2 from './img/bg.svg'
import img3 from './img/wave.png'
import {Link } from "react-router-dom"
const Login = () => {
  useEffect(() => {
    const addcl = function () {
      const parent = this.parentNode.parentNode;
      parent.classList.add('focus');
    };

    const remcl = function () {
      const parent = this.parentNode.parentNode;
      if (this.value === '') {
        parent.classList.remove('focus');
      }
    };

    const inputs = document.querySelectorAll('.input');
    inputs.forEach((input) => {
      input.addEventListener('focus', addcl);
      input.addEventListener('blur', remcl);
    });

    // Cleanup: remove event listeners when the component unmounts
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('focus', addcl);
        input.removeEventListener('blur', remcl);
      });
    };
  }, []);


  
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  
  
  
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/controle")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return(
    <>
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

<body>

<img class="wave" src={img3} />
<Link to='/Accesprivé' className="l"><div className="rt"><button className="rtr">Retour</button></div></Link>

<div class="lcontainer">
<div class="imggg">
  
  <img src={img2} />
</div>

<div class="login-content">
<form className="formlog" >
  

				<img src={img1} />
        
				<h2 class="title">Espace CONTROLE</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="bx bx-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Username</h5>
           		   		<input
              type="text"
              className="input"
              name="username"
              onChange={handleChange}
            />
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="bx bx-lock-alt"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input
              type="password"
              className="input"
              name="password"
              onChange={handleChange}
            />
            	   </div>
            	</div>
            	
              {err && err}
            <button onClick={handleLogin} className="btnn">Login</button>           </form>
          
    </div>
</div>
</body>
</>
);
};

export default Login;