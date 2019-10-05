import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

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
      ],
      addBarText: '',
      searchBar: '',
      newObject: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addMovieButton = this.addMovieButton.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }


  addMovieButton(event) {
    event.preventDefault();
    var postAdd = this.state.movies.concat({'title': this.state.addBarText});
    console.log(postAdd);
    this.setState({movies: postAdd});
    // ({movies: [this.state.movies, {'title': this.state.addBarText}]}))
    // this.setState(preState => { movies: [preState.movies, {'title': this.state.addBarText}]} );

  };

  //Filter the display table by the user input
  handleChange(event) {
    this.setState({searchBar: event.target.value});
  }
  addMovie(event) {
    this.setState({'addBarText': event.target.value});
  }
  filterMovies() {
    var newArray = this.state.movies.filter(movie => movie['title'].toLowerCase().includes(this.state.searchBar));
    return newArray;
  }

  handleSubmit(event) {
    altert('This is sumbitted');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>

        <form onSubmit = {this.handleSubmit}>
        <label>
          <input type = "text" placeholder = "Add movie title here..." onChange = {this.addMovie} value = {this.state.addBarText}/>
        </label>
          <input type = "submit" value = "Add" className = "addMovieButton" onClick = {this.addMovieButton}/>
        </form>

        <div className = 'searchMovie'>
        <form onSubmit = {this.handleSubmit}>
        <label>
          <input type="text" onChange = {this.handleChange} placeholder="Search.." value={this.state.searchBar}/>
        </label>
          <input type="submit" value="GO!" className = 'button' onClick = {this.handleClick}/>
        </form>
        </div>

        <MovieList movies = {this.filterMovies()}/>
      </div>
    )
  }

};
export default App;