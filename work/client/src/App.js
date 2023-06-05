import logo from './logo.svg';
import './App.css';
import LoginC from './pages/login/loginControle';
import LoginA from './pages/login/loginAnalyse';
import Register from './pages/register/register';
import Whole from './components/Whole.jsx'
import BooksAnalyse from "./pages/BooksAnalyse";
import UpdateAnalyse from "./pages/UpdateAnalyse";
import Accespp from './components/Accespp';

import { Navigate } from 'react-router-dom';
import { AuthContext } from "./context/authcontext";
import { useContext } from "react";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import './style.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const { currentUser } = useContext(AuthContext);
  
  const ProtectedRoute1 = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/loginC" />;
    }

    return children;
  };
  const ProtectedRoute2 = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/loginA" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/controle",
      element:<ProtectedRoute1>
      <Books />
      </ProtectedRoute1> ,
    },
    {
      path: "/loginControle",
      element: <LoginC />,
    },
    {
      path: "/Accesprivé",
      element: <Accespp/>,
    },
    {
      path: "/analyse",
      element:<ProtectedRoute2>
      <BooksAnalyse />
      </ProtectedRoute2> ,
    },
    {
      path: "/loginAnalyse",
      element: <LoginA />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
    {
      path: "/",
      element: <Whole />,
    },
    {
      path: "/accesp",
      element: <Accespp />,
    },
    {
      path: "/updateA/:id",
      element: <UpdateAnalyse />,
    },
  ]);
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
