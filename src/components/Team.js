import React,{ useEffect } from "react";
import RecruitDetails from "./RecruitDetails";
import TeamMemberList from "./TeamMemberList";



function Team({setTeamArray, teamArray, onDisselectBtnClickInTeamPage, currentTeam }) {
  console.log(currentTeam)

  useEffect(()=>{
    fetch("http://localhost:3000/teamMember")
	  .then(res => res.json())
    .then(data => setTeamArray(data.filter(teamMember=> teamMember.userId === currentTeam)) )
    // .then(data => console.log(data) )
    .catch(error => console.error('Error:', error))
  },[currentTeam])



  return (
    <div className="teamPage">
      
        <TeamMemberList heroArray={teamArray}
                        onDisselectBtnClickInTeamPage={onDisselectBtnClickInTeamPage}
                        />

    </div>
  );
}

export default Team;