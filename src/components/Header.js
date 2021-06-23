import React from "react";

// react-router-dom Imports
import { Link, NavLink } from 'react-router-dom';

function Header({ isLoggedIn, setLogIn }) {

  const handleLogOut = () => {
    setLogIn(!isLoggedIn)
  }


  return (
   <nav className="header-container">

      <div className="header-left">

          <NavLink to="/" id="header-logo">
            <a href="#">SUPERTEAM</a> 
          </NavLink>

        <div className="navbar-container">
          <NavLink to="/">
            <a href="#"  className="navlinks">Home</a> 
          </NavLink>
          <NavLink to="/team" >
          <a href="#" className="navlinks">Your Team</a> 
          </NavLink>
          <NavLink to="/addhero" >
          <a href="#" className="navlinks">Add a Hero</a> 
          </NavLink>
        </div>
      </div>

      <div className="header-right">
        {isLoggedIn ? <button onClick={handleLogOut}>Sign Out</button> 
        :
        <Link to="/signin" className="navbar-btn">
        <button>Sign in</button>
        </Link>
        }
      </div>

   </nav>
  );
}

export default Header;
