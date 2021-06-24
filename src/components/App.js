import React, { useEffect, useState } from "react";
import '../assets/App.css';
import Header from "./Header"
import Home from "./Home"
import Team from "./Team"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import RecruitDetails from "./RecruitDetails"
import NewHeroForm from "./NewHeroForm"
import TeamDetails from "./TeamDetails"

/* Import Route and Switch properties from react-router dom.
 The former allows assigned routing to varying components 
model parent/child branch behavior as a sitemap, while
the former allow us the assignment itself. */
// Tip: don't forget to run npm install react-router dom !
import { Route, Switch } from 'react-router-dom'

function App() {
  const [heroArray, setHeroArray] = useState([])
  const [heroSelectionArray, setHeroSelectionArray] = useState([])
  // const [teamArray, setTeamArray] = useState([])
  const [isLoggedIn, setLogIn] = useState(false)
  const [currentTeam, setCurrentTeam] = useState(null)
  // const [teamMemberArrayfromDB, setTeamMemberArrayfromDB] = ([])
  
  //callback function pass down to RecruitDetail page for the Enlist Btn
  let flag = true;
  const onHeroSelection = (selectedHero) => {
      if (heroSelectionArray.length === 0 ) {
        setHeroSelectionArray([...heroSelectionArray, selectedHero])
      } else { heroSelectionArray.map(hero => {
        // console.log(hero.id, selectedHero.id)
                if (hero.id ===selectedHero.id) {
                    flag = false; 
          }
    })
    if (flag){
      setHeroSelectionArray([...heroSelectionArray, selectedHero])
    }
  
  }
    //add hero to the heroSelectionArray 
    // if (selectedHero.id)
    
    //make this herocard disappear from RecruitList
    const heroArrayAfterSelect = heroArray.filter(hero=>hero.id !== selectedHero.id)
    setHeroArray(heroArrayAfterSelect)
  }

  //callback fn pass down to HeroSelection.js for AddToTeamBtn
  const onAddToTeamBtnClick = (heroSelectionArray) => {
    console.log(heroSelectionArray)
    
    heroSelectionArray.map(hero => {
      fetch("http://localhost:3000/teamMember", {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: currentTeam,
          heroId: hero.id,
          name: hero.name,
          image: `${hero.thumbnail.path}.${hero.thumbnail.extension}`
          })
      })
      .catch(error => console.error('Error:', error))
    })    

    //clear out heroSelectionArray 
    setHeroSelectionArray([]);
  }

  //handle disselectBtn click on HeroSelection
  const onDisselectBtnClickInSelection = (disselectedHero) => {
    //change the heroSelectionArray (disappear on the selection section)
    setHeroSelectionArray(heroSelectionArray.filter(selectedHero => selectedHero.name !== disselectedHero.name))
    
    //change the heroArray (display on the recruit list section)
    setHeroArray([...heroArray, disselectedHero])
  }

  


  const handleLogIn = (signedInTeam) => {
    setLogIn(true)
    setCurrentTeam(signedInTeam)
  }

  useEffect(() => {
    // fetch('http://localhost:3000/heroes')
    fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=c8d257c5c8de3331d6de741ea71c6a3a')
    .then(response => response.json())
    .then(heroData => {
      let heroes = heroData.data.results.map(hero => hero)
      setHeroArray(heroes)
    })
    // .then(heroData => setHeroArray(heroData.data.map(results => results.hero)))
    // .then(heroData => heroData.data.results.map(hero => console.log(hero)))
    // .then(heroData => setHeroArray(heroData))
  }, [])

  console.log(heroArray)
  // useEffect(() => {
  //   fetch('http://localhost:3000/heroes')
  //   // fetch('https://gateway.marvel.com:443/v1/public/characters?name=Deadpool&apikey=c8d257c5c8de3331d6de741ea71c6a3a')
  //   .then(response => response.json())
  //   // .then(heroData => console.log(heroData))
  //   .then(heroData => setHeroArray(heroData))
  // }, [])

  // console.log(heroArray)
  return (
    <div >
      <Header isLoggedIn={isLoggedIn} setLogIn={setLogIn} />
      <Switch>

        <Route exact path="/" component={() => <Home heroArray={heroArray} 
                                                     heroSelectionArray={heroSelectionArray} 
                                                     onAddToTeamBtnClick={onAddToTeamBtnClick}
                                                     onDisselectBtnClickInSelection={onDisselectBtnClickInSelection}

                                                     /> }  />
        <Route path="/recruit/:id" component={() => <RecruitDetails onHeroSelection={onHeroSelection} /> }  />
        <Route path="/team/:id" component={() => <TeamDetails onHeroSelection={onHeroSelection} /> }  />
        <Route exact path="/team" component={() => <Team currentTeam={currentTeam}
                                                      /> }  />
        <Route exact path="/addhero" component={() => <NewHeroForm /> }  />
        {/* <Route path="/team/:id" component={() => <RecruitDetails /> }  /> */}
        <Route exact path="/signin" component={() => <SignIn onExistingTeamLogIn={handleLogIn} /> }  />
        <Route exact path="/signup" component={() => <SignUp onNewTeamSubmit={handleLogIn} /> }  />
      </Switch>


      {/* <Home heroArray={heroArray} />

      <Team />

      <SignIn />

      <SignUp /> */}

    </div>
  );
}

export default App;
