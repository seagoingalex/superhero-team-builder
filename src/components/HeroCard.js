import React from "react";

// react-router-dom Imports
import { Link } from 'react-router-dom';

//import css from material ui
import Grid from '@material-ui/core/Grid';

function HeroCard( {hero, xsNum, smNum, seletedMemberCard} ) {

  const handleDisselectBtn = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log(hero)
  }
  
  const heroImage = hero.thumbnail.path + "." + hero.thumbnail.extension

  return (
 
      <Grid item xs={xsNum} sm={smNum} >
        <Link to={`/recruit/${hero.id}`}> 
          <div className="flex-card" id={seletedMemberCard}>
              <img className="img-in-card" src={heroImage} />
              <div className="hero-info-container">
                <h3 className="hero-name">{hero.name}</h3>
                <h4 className="hero-location">Hero Id: {hero.id}</h4>
                <button className="del-btn" onClick={(e)=>{handleDisselectBtn(e)}}> Disselect</button>
              </div>
          </div>
        </Link>
      </Grid>
  );
}

export default HeroCard;
