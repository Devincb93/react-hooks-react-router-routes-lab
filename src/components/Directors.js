import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
    {directors.map((director) => (
      <div key={director.name} className="directors">
        <h2>Name: {director.name}</h2>
        <div>Movies:
        {director.movies.map((movie) => (
          <div key={movie}>
            <ul>
            <li>
            {movie}
            </li>
            </ul>
          </div>
        ))}
      </div>
      </div>
    ))}
  </div>)
}

export default Directors;
