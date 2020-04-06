import React, { useState, useContext } from "react";
import { MovieContext} from './MovieContext';

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setName] = useState();
  const [rating, setRating] = useState();

  const updateName = e => {
    setName(e.target.value);
  }

  const updateRating = e => {
    setRating(e.target.value);
  }

  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, {name: name, rating: rating}]);
  }

  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name || ''} onChange={updateName} />
      <input type="number" name="rating" value={rating || 0} onChange={updateRating} />
      <button >Add</button>
    </form>
  );
};

export default AddMovie;
