import React from "react";
import HeroCard from "./HeroCard"
import RecruitDetails from "./RecruitDetails"


function RecruitList({ heroArray, onHeroSelection }) {

  return (
    <div className="flex-container">
        <h1>this is RecruitList</h1>
        {heroArray.map(hero => <HeroCard key={hero.id} hero={hero} onHeroSelection={onHeroSelection} />)}
        
    </div>
  );
}

export default RecruitList;