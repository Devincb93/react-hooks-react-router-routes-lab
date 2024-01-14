import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
    
      {actors.map((actor, index) => (
        <div key={index}>
          <h2 >Name: {actor.name}</h2>
          <div>Movies: 
            {actor.movies.map((movie) => (
              <div key={movie}>
                <ul>
              <li>{movie}</li>
              </ul>
              </div>
            ))}
        </div>
        </div>
      ))}
    </div>
  
  )
}

export default Actors;
