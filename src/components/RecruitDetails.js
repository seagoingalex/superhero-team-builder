import React from "react";
import { useHistory, useParams, Link } from 'react-router-dom'

function RecruitDetails() {

    const history = useHistory();
    
    function handleBack() {
        history.goBack()
    }


  return (
    <div className="recruitDetailsContainer">
      <h1>this is RecruitDetails</h1>
      <img src="https://images-na.ssl-images-amazon.com/images/I/A1FytTbVFDL._AC_SX522_.jpg"/>
      <h2>Superhero Name</h2>
      <p>All the details of this superhero</p>
      <button onClick={handleBack}> Go Back</button>
      <button> Enlist </button>

    </div>
  );
}

export default RecruitDetails;