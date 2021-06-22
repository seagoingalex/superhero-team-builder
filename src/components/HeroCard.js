import React from "react";


function HeroCard( {hero} ) {
  console.log(hero)
  return (
    <div className="heroCardContainer">
        <h1>HeroCard</h1>
        <img src={hero.image} />
        <h3>{hero.name}</h3>
        <p>Hero Id: {hero.id}</p>
        <button> Delete</button>
    </div>
  );
}

export default HeroCard;
