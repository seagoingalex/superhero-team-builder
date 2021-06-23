import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from 'react-router-dom'

function RecruitDetails({ onHeroSelection }) {
    const [hero, setHero] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const { id } = useParams()

    const history = useHistory();
    
    function handleBack() {
        history.goBack()
    }

    useEffect(() => {
      fetch(`http://localhost:3000/heroes/${id}`)
        .then((r) => r.json())
        .then((hero) => {
          setHero(hero);
          setIsLoaded(true);
        });
    }, [id]);

    if (!isLoaded) return <h2>Loading...</h2>;

    

  return (
    <div className="recruitDetailsContainer">
      <h1>this is RecruitDetails</h1>
      <img src={hero.image}/>
      <h2>{hero.name}</h2>
      <p>All the details of this superhero</p>
      <button onClick={handleBack}> Go Back</button>
      <button /*onClick={onHeroSelection(hero)}*/> Enlist </button>

    </div>
  );
}

export default RecruitDetails;