import React from 'react';
import MovieList from './MovieList.jsx';
import Movie from './Movie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ]
    };

  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <MovieList movies = {this.state.movies}/>
      </div>
    )
  }

};
export default App;