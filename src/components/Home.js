import React from "react";
import HeroSelection from "./HeroSelection"
import RecruitList from "./RecruitList"


function Home({ heroArray, heroSelectionArray, onAddToTeamBtnClick, onDisselectBtnClickInSelection, heroArrayParse, setHeroArrayParse }) {


  return (
    <div className="HomeContainer">

        <HeroSelection heroSelectionArray={heroSelectionArray}
                       onAddToTeamBtnClick={onAddToTeamBtnClick}
                       onDisselectBtnClickInSelection={onDisselectBtnClickInSelection}
                      
                        />

        <RecruitList heroArray={heroArray} heroArrayParse={heroArrayParse} setHeroArrayParse={setHeroArrayParse}/>


    </div>
  );
}

export default Home;