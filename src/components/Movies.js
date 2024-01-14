import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    <div>
      {movies.map((movie) => (
         <div key={movie.title}>
          <h2>Name: {movie.title}</h2>
          <p>Time: {movie.time}</p>
          <div>Genres:
          {movie.genres.map((genre) => (
            <div key={genre}>
              <ul>
              <li> {genre}</li>
              </ul>
            </div>
          ))}
          </div>
         </div>
      ))}
    </div>
  </div>
  );
}

export default Movies;
