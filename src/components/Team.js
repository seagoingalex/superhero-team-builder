import React from "react";
import RecruitDetails from "./RecruitDetails";
import TeamMemberList from "./TeamMemberList";



function Team({ heroArray }) {
  return (
    <div className="teamPage">
      
        <TeamMemberList heroArray={heroArray} />

    </div>
  );
}

export default Team;