import React from "react";
import HeroSelection from "./HeroSelection"
import RecruitList from "./RecruitList"


function Home({ heroArray }) {
  return (
    <div className="HomeContainer">
      <h1>this is the Home page</h1>

        <HeroSelection heroArray={heroArray} />

        <RecruitList />


    </div>
  );
}

export default Home;