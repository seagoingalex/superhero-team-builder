import React, { useEffect } from "react";
import '../assets/App.css';
import Header from "./Header"
import Home from "./Home"
import Team from "./Team"
import SignIn from "./SignIn"
import SignUp from "./SignUp"


function App() {
  return (
    <div >

      <Header />

      <Home />

      <Team />

      <SignIn />

      <SignUp />

    </div>
  );
}

export default App;
