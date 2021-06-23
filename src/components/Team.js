import React from "react";
import RecruitDetails from "./RecruitDetails";
import TeamMemberList from "./TeamMemberList";



function Team({teamArray }) {
  return (
    <div className="teamPage">
      
        <TeamMemberList heroArray={teamArray} />

    </div>
  );
}

export default Team;