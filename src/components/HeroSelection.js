import React from "react";
import HeroCard from "./HeroCard";


function HeroSelection({ heroArray }) {
  console.log(heroArray)
    return (
    <div className="flex-container">
        <h1 style={{color: "red"}}>this is HeroSelection</h1>
        {/* {heroArray.map(hero => console.log(hero) )} */}
        {heroArray.map(hero => <HeroCard key={hero.id} hero={hero} />)}
        {/* <HeroCard /> */}
    </div>
  );
}

export default HeroSelection;
