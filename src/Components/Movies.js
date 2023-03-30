import React from "react";
import './Movies.css';

const Movies = ({movie}) => {

   const {i,l,qid,s,yr} = movie;

    return(
        <>
        <div className="shows-container">
            <div className="poster-container">
                <img src={i.imageUrl} alt="shows"/>
            </div>
            <div className="title">
               <span>{l}</span>
            </div>
            <div className="genre">
              <span>Genre: Action, Crime</span>
            </div>
            <div className="show-info">
                <h3>Type: {qid}</h3>
                <h3>Cast: {s}</h3>
                <h3>{yr}</h3>
            </div>
        </div>

        </>
    )

}

export default Movies;
