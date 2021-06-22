import React from "react";

// react-router-dom Imports
import { Link } from 'react-router-dom';

function Header() {
  return (
   <nav>
    <Link to="/">
    <a href="#">Home</a> |
    </Link>
    <Link to="/team">
    <a href="#">Your Team</a> |
    </Link>
    <Link to="/signin">
    <button>Sign in</button>
    </Link>
    <Link to="/signup">
    <button>Sign up</button>
    </Link>
    {/* <a href="#">Battle</a> |
    <a href="#">Add a Hero</a> */}
   </nav>
   
  // V All of Suey's original Header stuff 
  //  <div className="headerContainer">

  //       <h2>This is Header</h2>

  //       <nav>
  //           <a href="#">Home</a> |
  //           <a href="#">Your Team</a> |
  //           {/* <a href="#">Battle</a> |
  //           <a href="#">Add a Hero</a> */}
  //       </nav>

  //       <div>
  //           <button>Sign In</button>
  //           <button>Sign Up</button>
  //       </div>
        
  //   </div>
  );
}

export default Header;
