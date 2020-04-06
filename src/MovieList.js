import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id}></Movie>
      ))}
    </div>
  );
};

export default MovieList;
