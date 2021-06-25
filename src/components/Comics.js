import React, { useEffect, useState } from "react";

function Comics  ({ id })  {
    const [comicsArray, setComicsArray] = useState ([]);
    const [isLoaded, setIsLoaded] = useState (false);


    const [sliceNum, setSliceNum] = useState(0)
    // const [comicsLeft, setComicsLeft] = useState(comicsArray.length)

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

    const handleNextBtn = () => {
        setSliceNum(sliceNum+4)
    }

    const handleBackBtn = () => {
        setSliceNum(sliceNum-4)
    }

    const comicsOnDisplay = comicsArray.map(comic=>comic.thumbnail.path + "." + comic.thumbnail.extension).slice(sliceNum, sliceNum+4)

    return (
        <div>
            { comicsOnDisplay.length === 0 ? 
            null :
            <div>
                <h2 className="comics-h2">The Comic Series this superhero is in:</h2>
                <div className="comics-container"> 
                        
                        {comicsOnDisplay.map(link => <img className="comics-img" src={link} />)}
                    
                </div> 
                { comicsArray.length < 5 ?
                null :
                <div>
                    {comicsArray.length >4 && comicsOnDisplay.length === 4 && comicsArray.length%4 > 0 ? 
                    <button className="next-btn" onClick={()=>{handleNextBtn()}}>Next</button> : null
                    }
                    {sliceNum > 3 ? 
                    <button className="back-btn" onClick={()=>{handleBackBtn()}}>Back</button> : null
                    }
                </div>
                }
            </div>
        }
        </div>
    );
}

export default Comics; 