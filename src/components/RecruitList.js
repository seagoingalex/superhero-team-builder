import React from "react";
import HeroCard from "./HeroCard"
import RecruitDetails from "./RecruitDetails"


function RecruitList() {

  return (
    <div className="flex-container">
        <h1>this is RecruitList</h1>

        {true ? 
        // <HeroCard />
        null
        :
        <RecruitDetails />
        }
    </div>
  );
}

export default RecruitList;