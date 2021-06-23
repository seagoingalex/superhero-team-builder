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
  // const [heroSelectionArray, setHeroSelectionArray] = useState([])

  // const handleHeroSelection = (selectedHero) => {
  //   setHeroSelectionArray([...heroSelectionArray, selectedHero])
  // }

  useEffect(() => {
    fetch('http://localhost:3000/heroes')
    // fetch('https://gateway.marvel.com:443/v1/public/characters?name=Deadpool&apikey=c8d257c5c8de3331d6de741ea71c6a3a')
    .then(response => response.json())
    // .then(heroData => console.log(heroData))
    .then(heroData => setHeroArray(heroData))
  }, [])

  console.log(heroArray)
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Home heroArray={heroArray} /*heroSelectionArray={heroSelectionArray}*/ /> }  />
        <Route path="/recruit/:id" component={() => <RecruitDetails /*onHeroSelection={handleHeroSelection} *//> }  />
        <Route exact path="/team" component={() => <Team heroArray={heroArray} /> }  />
        <Route exact path="/addhero" component={() => <NewHeroForm /> }  />
        <Route path="/team/:id" component={() => <RecruitDetails /> }  />
        <Route exact path="/signin" component={() => <SignIn /> }  />
        <Route exact path="/signup" component={() => <SignUp /> }  />
      </Switch>


      {/* <Home heroArray={heroArray} />

      <Team />

      <SignIn />

      <SignUp /> */}

    </div>
  );
}

export default App;
