import React from "react";
import HeroSelection from "./HeroSelection"
import RecruitList from "./RecruitList"


function Home({ heroArray, heroSelectionArray }) {


  return (
    <div className="HomeContainer">
      <h1>this is the Home page</h1>

        <HeroSelection heroSelectionArray={heroSelectionArray}  />

        <RecruitList heroArray={heroArray} />


    </div>
  );
}

export default Home;