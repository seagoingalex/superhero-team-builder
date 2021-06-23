import React from "react";
import HeroCard from "./HeroCard";


function HeroSelection({ heroSelectionArray }) {
    return (
    <div className="flex-container">
        <h1 style={{color: "red"}}>this is HeroSelection</h1>
        {/* {heroSelectionArray.map(hero => <HeroCard key={hero.id} hero={hero} />)} */}
        
        {/* <HeroCard /> */}
    </div>
  );
}

export default HeroSelection;
