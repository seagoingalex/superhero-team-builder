import React from "react";
import HeroSelection from "./HeroSelection"
import RecruitList from "./RecruitList"


function Home({ heroArray, heroSelectionArray, onAddToTeamBtnClick, onDisselectBtnClickInSelection }) {


  return (
    <div className="HomeContainer">
      {
        heroSelectionArray.length === 0 ?
        <h2 className="home-h2">Please start selecting your heroes to your team</h2>
        :
        
      

        <HeroSelection heroSelectionArray={heroSelectionArray}
                       onAddToTeamBtnClick={onAddToTeamBtnClick}
                       onDisselectBtnClickInSelection={onDisselectBtnClickInSelection}
                      
                        />
      }
        <RecruitList heroArray={heroArray} />


    </div>
  );
}

export default Home;