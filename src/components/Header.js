import React from "react";

// react-router-dom Imports
import { Link, NavLink } from 'react-router-dom';

function Header({ isLoggedIn, setLogIn, currentTeam }) {

  const handleLogOut = () => {
    setLogIn(!isLoggedIn)
  }


  return (
   <nav className="header-container">

      <div className="header-left">

          <NavLink to="/" id="header-logo">
          SUPERTEAM
          </NavLink>

        <div className="navbar-container">
          <NavLink className="button" to="/" exact activeStyle={{color: "red"}}>
          Home
          </NavLink>
          <NavLink className="button" to="/team" exact activeStyle={{color: "red"}}>
          {isLoggedIn ? currentTeam : "Your Team"}
          </NavLink>
          <NavLink className="button" to="/addhero" exact activeStyle={{color: "red"}}>
          Create Hero 
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
