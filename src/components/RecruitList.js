import React from "react";
import HeroCard from "./HeroCard"
import RecruitDetails from "./RecruitDetails"


function RecruitList() {

  return (
    <div className="recruitListContainer">
        <h1>this is RecruitList</h1>

        {true ? 
        <HeroCard />
        :
        <RecruitDetails />
        }
    </div>
  );
}

export default RecruitList;