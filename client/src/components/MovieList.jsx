import React from 'react';
import Movie from './Movie.jsx'

const MovieList = (props) => (
  <table className = 'table'>
    {props.movies.map((movie, idx) => (
      <Movie
          movieName = {movie.title}
          key = {movie.movieName + idx.toString()}
      />
    ))}
  </table>
);

export default MovieList;