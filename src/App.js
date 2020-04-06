import React from "react";
import { MovieProvider } from "./MovieContext";
import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovie from "./AddMovie";

const App = () => {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default App;
