import React from "react";

// react-router-dom Imports
import { Link } from 'react-router-dom';

function HeroCard( {hero} ) {
  console.log(hero)
  return (
    <Link to="/recruit/:id"> 
    <div className="flex-card">
        {/* <h1>HeroCard</h1> */}
        <img src={hero.image} />
        <h3 className="hero-name">{hero.name}</h3>
        <h4 className="hero-location">Hero Id: {hero.id}</h4>
        <button className="hero-superpower"> Delete</button>
    </div>
    </Link>
  );
}

export default HeroCard;
