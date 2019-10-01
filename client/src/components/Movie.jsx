import React from 'react';

const Movie = (props) => (
  <tbody>
    <tr className = 'tr'>
      <th>{props.movieName}</th>
    </tr>
  </tbody>
);

export default Movie;