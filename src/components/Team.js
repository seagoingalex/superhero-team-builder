import React from "react";
import RecruitDetails from "./RecruitDetails";
import TeamMemberList from "./TeamMemberList";



function Team({ heroArray }) {
  return (
    <div className="teamContainer">
        <h1>This is the Team page</h1>
        <TeamMemberList heroArray={heroArray} />

        {/* <RecruitDetails /> */}
    </div>
  );
}

export default Team;