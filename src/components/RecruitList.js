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

function RecruitList({ heroArray, onHeroSelection}) {
  const classes = useStyles();

  //props to pass down for css purpose
  const xsNum = 6;
  const smNum = 2;

  return (
    <div className="flex-container">
      
        <div className={classes.root}>
          <Grid container spacing={3}>
            {heroArray.map(hero => <HeroCard 
                                              key={hero.id} 
                                              hero={hero} 
                                              onHeroSelection={onHeroSelection}
                                              xsNum={xsNum}
                                              smNum={smNum}
                                              />)}
          </Grid>
        </div>
      
    </div>
  );
}

export default RecruitList;