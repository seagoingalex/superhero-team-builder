import React, { useEffect, useState } from "react";

function Comics  ({ id })  {
    const [comicsArray, setComicsArray] = useState ([]);
    const [isLoaded, setIsLoaded] = useState (false);


    const [sliceNum, setSliceNum] = useState(0)

    useEffect(()=>{
    //the fetch for commic series
    fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/series?apikey=c8d257c5c8de3331d6de741ea71c6a3a`)
    .then((r) => r.json())
    .then((series) => {
        setComicsArray(series.data.results);
        setIsLoaded(true);
    });
    },[id])

    if (!isLoaded) return <h2>Loading...</h2>;

    const comicsOnDisplay = comicsArray.map(comic=>comic.thumbnail.path + "." + comic.thumbnail.extension)

    const handleNextBtn = () => {
        setSliceNum(sliceNum+4)
    }

    const handleBackBtn = () => {
        setSliceNum(sliceNum-4)
    }

    return (
        <div>
            <h2 className="comics-h2">The Comic Series thie superhero is in:</h2>
            <div className="comics-container"> 
                
                {comicsOnDisplay.slice(sliceNum, sliceNum+4).map(link => <img className="comics-img" src={link} />)}
            
            </div>  
            <button className="back-btn" onClick={()=>{handleBackBtn()}}>Back</button>
            <button className="next-btn" onClick={()=>{handleNextBtn()}}>Next</button>
        </div>
    );
}

export default Comics; 