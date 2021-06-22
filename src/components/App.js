import React, { useEffect, useState } from "react";
import '../assets/App.css';
import Header from "./Header"
import Home from "./Home"
import Team from "./Team"
import SignIn from "./SignIn"
import SignUp from "./SignUp"


function App() {
  const [heroArray, setHeroArray] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/heroes')
    .then(response => response.json())
    .then(heroData => setHeroArray(heroData))
  }, [])

  console.log(heroArray)
  return (
    <div >

      <Header />

      <Home heroArray={heroArray} />

      <Team />

      <SignIn />

      <SignUp />

    </div>
  );
}

export default App;
