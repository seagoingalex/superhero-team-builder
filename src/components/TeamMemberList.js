import React from "react";
import HeroCard from "./HeroCard";

//import things for css
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function TeamMemberList({ heroArray }) {
  //material ui thing
  const classes = useStyles();

  //props to pass down for css purpose
  const xsNum = 6;
  const smNum = 3;
  const seletedMemberCard = "seletedMemberCard";

  return (
    <div className="flex-container">
        <h3>this is TeamMemberList</h3>
        <div className={classes.root}>
          <Grid container spacing={3}>
            {heroArray.map(hero => <HeroCard 
                                    key={hero.id} 
                                    hero={hero} 
                                    xsNum={xsNum}
                                    smNum={smNum}
                                    seletedMemberCard={seletedMemberCard}
                                    />)}
          </Grid>
        </div>
    </div>
  );
}

export default TeamMemberList;