import React from "react";
import HeroCard from "./HeroCard";



function TeamMemberList({ heroArray }) {
  return (
    <div className="flex-container">
        <h1>this is TeamMemberList</h1>
        {heroArray.map(hero => <HeroCard key={hero.id} hero={hero} />)}
        {/* <HeroCard /> */}
    </div>
  );
}

export default TeamMemberList;