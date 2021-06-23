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

function HeroSelection({ /*heroSelectionArray*/ }) {
  //material ui thing
  const classes = useStyles();

  //hard code in heroSelectionArray for css purpose
  const heroSelectionArray = 
    [
      {
        "id": 1,
        "name": "Loki",
        "image": "https://images-na.ssl-images-amazon.com/images/I/A1FytTbVFDL._AC_SX522_.jpg"
      },
      {
        "id": 2,
        "name": "Iron Man",
        "image": "https://i.pinimg.com/736x/f9/6a/2b/f96a2b05cf23883ad4e3a82f70780465.jpg"
      }
  ]

  //props to pass down for css purpose
  const xsNum = 6;
  const smNum = 3;
  const seletedMemberCard = "seletedMemberCard";


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
                                                />)}
          </Grid>
        </div>
        
    </div>
  );
}

export default HeroSelection;
