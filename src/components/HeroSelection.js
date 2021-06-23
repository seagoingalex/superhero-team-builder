import React from "react";
import HeroCard from "./HeroCard";
import { useHistory } from "react-router-dom"

//import things for css
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function HeroSelection({ heroSelectionArray, onAddToTeamBtnClick, onDisselectBtnClickInSelection }) {
  //material ui thing
  const classes = useStyles();

  //props to pass down for css purpose
  const xsNum = 6;
  const smNum = 3;
  const seletedMemberCard = "seletedMemberCard";

  //useHistory for the AddToTeamBtn
  const history = useHistory();

  //Add To Team Btn handler
  const handleAddToTeamBtn = () => {
    //push to team page
    history.push("/team")
    //pass heroSelectionArray up the App.js for 1.POST to the database 2.filter out the heroArray when load 
    onAddToTeamBtnClick(heroSelectionArray)
  }

    return (
    <div className="flex-container">
        <div className={classes.root}>
          <Grid container spacing={3}>

            {heroSelectionArray.map(hero => <HeroCard 
                                                key={hero.id} 
                                                hero={hero} 
                                                xsNum={xsNum}
                                                smNum={smNum}
                                                seletedMemberCard={seletedMemberCard}
                                                onDisselectBtnClick={onDisselectBtnClickInSelection}
                                                />)}
          </Grid>
        </div>
        <button onClick={()=>{handleAddToTeamBtn()}}>Add To Your Team</button>
    </div>
  );
}

export default HeroSelection;
