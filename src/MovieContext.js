import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: "RDB",
            rating: 8,
            id: 12356
        },
        {
            name: "Angrezi Medium",
            rating: 7.5,
            id: 12348
        },
        {
            name: "DDLJ",
            rating: 8.5,
            id: 44848
        }]);
    return (
      <MovieContext.Provider value={[movies, setMovies]}>
          {props.children}
      </MovieContext.Provider>
    );
}