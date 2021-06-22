import React from "react";


function Header() {
  return (
    <div className="headerContainer">

        <h2>This is Header</h2>

        <nav>
            <a href="#">Home</a> |
            <a href="#">Your Team</a> |
            {/* <a href="#">Battle</a> |
            <a href="#">Add a Hero</a> */}
        </nav>

        <div>
            <button>Sign In</button>
            <button>Sign Up</button>
        </div>
        
    </div>
  );
}

export default Header;
