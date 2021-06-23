import React, { useEffect, useState } from "react";
import '../assets/App.css';
import Header from "./Header"
import Home from "./Home"
import Team from "./Team"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import RecruitDetails from "./RecruitDetails"
import NewHeroForm from "./NewHeroForm"

/* Import Route and Switch properties from react-router dom.
 The former allows assigned routing to varying components 
model parent/child branch behavior as a sitemap, while
the former allow us the assignment itself. */
// Tip: don't forget to run npm install react-router dom !
import { Route, Switch } from 'react-router-dom'

function App() {
  const [heroArray, setHeroArray] = useState([])
  const [heroSelectionArray, setHeroSelectionArray] = useState([])
  const [teamArray, setTeamArray] = useState([])
  const [isLoggedIn, setLogIn] = useState(false)
  const [currentTeam, setCurrentTeam] = useState(null)
  
  //callback function pass down to RecruitDetail page for the Enlist Btn
  const onHeroSelection = (selectedHero) => {
    //add hero to the heroSelectionArray 
    setHeroSelectionArray([...heroSelectionArray, selectedHero])
    //make this herocard disappear from RecruitList
    const heroArrayAfterSelect = heroArray.filter(hero=>hero.id !== selectedHero.id)
    setHeroArray(heroArrayAfterSelect)
  }

  //callback fn pass down to HeroSelection.js for AddToTeamBtn
  const onAddToTeamBtnClick = (heroSelectionArray) => {
    // console.log(heroSelectionArray)
    console.log(currentTeam)
    

    //set teamArray 
    setTeamArray([...teamArray, ...heroSelectionArray]);

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
          image: hero.image
          })
      })
      .catch(error => console.error('Error:', error))
    })    

    //clear out heroSelectionArray 
    setHeroSelectionArray([]);
   
    //POST to DataBase
    // const aaa = [{x:1},{x:2}]
    // console.log(aaa[0].x)
    //iterate thru the array and POST obj
    // const herosNeedToPOST = heroSelectionArray.filter(heroSelected=> /*console.log(heroSelected.id)*/
      //{
        // console.log("123")
        // console.log(aaa.map((a)=>a.x ));
        // aaa.map(a=> {
        //   if (a.x !== heroSelected.id) {
        //     console.log(heroSelected)
        //     return heroSelected
        //   } else {
        //     console.log("alreadySelected")
        //   }
        // })
      // if(aaa.map((a)=>a.x !== heroSelected.id)) {
      //   return heroSelected }
      // else {
      //   console.log("alreadySelected")
      // }
    // }
    // )
    // console.log(herosNeedToPOST)
    // heroSelectionArray.map(selectedHero=>{
    //   fetch("http://localhost:3000/teamMember", {
    //     method: 'POST',
    //     headers:{
    //       'Content-Type': 'application/json'
    //     },
    //     body:JSON.stringify({
    //       userId:1,
    //       heroId:selectedHero.id
    //     })
    //   })
    //   .then(res => res.json())
    //   .then(data => console.log(data) )
    //   .catch(error => console.error('Error:', error))
    // })
  }

  // console.log('teamArray',teamArray, "heroSelectionArray",heroSelectionArray )




  // const handleHeroSelection = (selectedHero) => {
  //   setHeroSelectionArray([...heroSelectionArray, selectedHero])
  // }


  const handleLogIn = (signedInTeam) => {
    setLogIn(true)
    setCurrentTeam(signedInTeam)
  }

  useEffect(() => {
    fetch('http://localhost:3000/heroes')
    // fetch('https://gateway.marvel.com:443/v1/public/characters?name=Deadpool&apikey=c8d257c5c8de3331d6de741ea71c6a3a')
    .then(response => response.json())
    // .then(heroData => console.log(heroData))
    .then(heroData => setHeroArray(heroData))
  }, [])

  // console.log(heroArray)
  return (
    <div >
      <Header isLoggedIn={isLoggedIn} setLogIn={setLogIn} />
      <Switch>

        <Route exact path="/" component={() => <Home heroArray={heroArray} 
                                                     heroSelectionArray={heroSelectionArray} 
                                                     onAddToTeamBtnClick={onAddToTeamBtnClick}
                                                     
                                                     /> }  />
        <Route path="/recruit/:id" component={() => <RecruitDetails onHeroSelection={onHeroSelection} /> }  />
        <Route exact path="/team" component={() => <Team teamArray={teamArray} /> }  />
        <Route exact path="/addhero" component={() => <NewHeroForm /> }  />
        <Route path="/team/:id" component={() => <RecruitDetails /> }  />
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
