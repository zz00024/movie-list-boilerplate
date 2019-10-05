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
      newArray: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addMovieButton = this.addMovieButton.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleClick() {
    console.log('clicked');
  }

  addMovieButton(event) {
    console.log('hello');
    console.log(this.state['movies']);
    var movieArray = this.state['movies'];
    // console.log('add movie clicked');
    // console.log(movieArray);
    //add user input movie into the table and display it
    var userInput;
    //userInput is what we are going to add
    userInput = event.target.value;
    console.log(event.value);
    //add userInput into the this.state.movies array object
    this.setState((state)=>{
      movieArray.push({'title': userInput});
    });
    // console.log(this.state['movies']);

  }

  //Filter the display table by the user input
  handleChange(event) {
    this.setState({searchBar: event.target.value});
  }

  filterMovies() {
    var newArray = this.state.movies.filter(movie => movie['title'].toLowerCase().includes(this.state.searchBar));
    console.log(newArray);
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

{/*
        <form onSubmit={this.handleSubmit}>
        <input type="text" id="myMovie" className = 'addMovie'  placeholder="Add movie title here..." value={this.state.addBarText}></input>
        </form>
        <button className = 'addMovieButton' onClick = {this.addMovieButton}>Add</button> */}


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