import React from "react";
import HeroCard from "./HeroCard"
import RecruitDetails from "./RecruitDetails"
//import things for css
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function RecruitList({ heroArray, onHeroSelection, heroArrayParse, setHeroArrayParse}) {
  const classes = useStyles();

  //props to pass down for css purpose
  const xsNum = 6;
  const smNum = 2;
  
  //props that pass that to hide the button
  const disselectBtnId = "disselectBtnId"

  const handleBack = () => {
    setHeroArrayParse(heroArrayParse - 100)
  }

  const handleNext = () => {
    setHeroArrayParse(heroArrayParse + 100)
  }

  return (
    <div className="flex-container">
      
        <div className={classes.root}>
          {heroArrayParse > 0 ? <button onClick={handleBack}>Back</button> : null}
          {/* <button onClick={handleBack}>Back</button> */}
          {heroArrayParse < 1400 ? <button onClick={handleNext}>Next</button> : null}
          {/* <button onClick={handleNext}>Next</button> */}
          <Grid container spacing={3}>
            {heroArray.map(hero => <HeroCard 
                                              key={hero.id} 
                                              hero={hero} 
                                              heroId={hero.id}
                                              onHeroSelection={onHeroSelection}
                                              xsNum={xsNum}
                                              smNum={smNum}
                                              disselectBtnId={disselectBtnId}
                                              heroImage={hero.thumbnail.path + "." + hero.thumbnail.extension}
                                              link={`/recruit/${hero.id}`}
                                              />)}
          </Grid>
        </div>
      
    </div>
  );
}

export default RecruitList;