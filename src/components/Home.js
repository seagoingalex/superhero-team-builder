import React from "react";
import HeroSelection from "./HeroSelection"
import RecruitList from "./RecruitList"


function Home({ isLoadedHeroes, heroArray, displayArray, heroSelectionArray, onAddToTeamBtnClick, onDisselectBtnClickInSelection, heroArrayParse, setHeroArrayParse }) {


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

        <RecruitList isLoadedHeroes={isLoadedHeroes} heroArray={heroArray} heroArrayParse={heroArrayParse} setHeroArrayParse={setHeroArrayParse}/>

    </div>
  );
}

export default Home;