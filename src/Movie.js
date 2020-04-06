import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
      <h3>{movie.name}</h3>
      <p>{movie.rating}</p>
    </div>
  );
};

export default Movie;
