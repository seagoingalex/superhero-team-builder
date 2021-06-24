import React,{ useEffect,useState } from "react";
import RecruitDetails from "./RecruitDetails";
import TeamMemberList from "./TeamMemberList";



function Team({/*setTeamArray, teamArray, onDisselectBtnClickInTeamPage,*/ currentTeam }) {
  console.log(currentTeam)
  const [teamArray, setTeamArray] = useState([])


  const onDisselectBtnClickInTeamPage = (disselectedHero) => {
    console.log(disselectedHero.id)
    //Delete from database 
    fetch(`http://localhost:3000/teamMember/${disselectedHero.id}`, {
      method: 'DELETE',
      })
      .catch(error => console.error('Error:', error))
    
    //Delete from teamArray
    setTeamArray(teamArray.filter(teamMember=> teamMember.name !== disselectedHero.name))
  }

  useEffect(()=>{
    fetch("http://localhost:3000/teamMember")
	  .then(res => res.json())
    .then(data => setTeamArray(data.filter(teamMember=> teamMember.userId === currentTeam)) )
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