import React from "react";
import HeroSelection from "./HeroSelection"
import RecruitList from "./RecruitList"


function Home({ heroArray, heroSelectionArray, onAddToTeamBtnClick }) {


  return (
    <div className="HomeContainer">

        <HeroSelection heroSelectionArray={heroSelectionArray}
                       onAddToTeamBtnClick={onAddToTeamBtnClick}
                        />

        <RecruitList heroArray={heroArray} />


    </div>
  );
}

export default Home;