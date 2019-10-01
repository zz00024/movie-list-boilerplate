import React from 'react';
import Movie from './Movie.jsx'

const MovieList = (props) => (
  <table className = 'table'>
  <tbody>
    <tr className = 'tr'>
    <th>Mean Girls</th>
    </tr>
    <tr>
    <th>Hackers</th>
    </tr>
    <tr>
    <th>The Grey</th>
    </tr>
    <tr>
    <th>Sunshine</th>
    </tr>
    <tr>
    <th>Ex Machina</th>
    </tr>
  </tbody>
</table>
);

export default MovieList;