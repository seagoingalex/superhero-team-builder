import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from 'react-router-dom'

function TeamDetails({ onHeroSelection }) {
    const [hero, setHero] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const { id } = useParams()

    const history = useHistory();
    
    function handleBack() {
        history.goBack()
    }

    useEffect(() => {
      fetch(`http://localhost:3000/teamMember/${id}`)
      .then((r) => r.json())
      .then((hero) => {
        setHero(hero);
        setIsLoaded(true);
      });
  }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>;

    const deselectClickHandler = () => {
        //delete request 
        fetch(`http://localhost:3000/teamMember/${id}`, {
            method: 'DELETE',
            })
        .catch(error => console.error('Error:', error))
          
        //push to Team page
        history.push("/team")
    }



  return (
    <div className="recruitDetailsContainer">
      <img src={hero.image} />
       <h2>{hero.name}</h2>
      <p>{hero.description}</p> 
      <button onClick={handleBack}> Go Back</button>
      <button onClick={()=>{deselectClickHandler()}}>Remove from team </button>

    </div>
  );
}

export default TeamDetails;