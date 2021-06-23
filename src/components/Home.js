import React from "react";
import HeroSelection from "./HeroSelection"
import RecruitList from "./RecruitList"


function Home({ heroArray, heroSelectionArray }) {


  return (
    <div className="HomeContainer">

        <HeroSelection heroSelectionArray={heroSelectionArray}  />

        <RecruitList heroArray={heroArray} />


    </div>
  );
}

export default Home;