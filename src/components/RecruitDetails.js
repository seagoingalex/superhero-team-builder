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
      fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=c8d257c5c8de3331d6de741ea71c6a3a`)
        .then((r) => r.json())
        .then((hero) => {
          setHero(hero.data.results[0]);
          setIsLoaded(true);
        });
    }, [id]);

    if (!isLoaded) return <h2>Loading...</h2>;

    const enlistClickHandler = (hero) => {
      //add hero to the heroSelectionArray & make this herocard disappear from RecruitList
      //callback fn defined on App.js
      onHeroSelection(hero)
      //push the page back to the home page 
      history.push('/')
    }

    const heroImage = hero.thumbnail.path + "." + hero.thumbnail.extension


  return (
    <div className="recruitDetailsContainer">
      
      <div className="detail-left-container">
        <img className="detail-img" src={heroImage}/>
       
        <div className="btngroup">
          <button className="detail-btn" onClick={handleBack}> Go Back</button>
          <button className="detail-btn" onClick={()=>{enlistClickHandler(hero)}}> Enlist</button>
        </div>
      </div>

      <div className="detail-right-container">
        <h2 className="detail-name"> {hero.name}</h2>
        <h3 className="detail-description">Description:</h3>
        { hero.description ==="" ?
        <p> Sorry, it doesn't seem like Marvel cares about this super hero enough to give him/her a description 😔 </p>
        :
        <p> {hero.description}</p>
        }
      </div>
    </div>
  );
}

export default RecruitDetails;