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
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.addMovieButton = this.addMovieButton.bind(this);
  }

  handleClick() {
    console.log('clicked');
  }

  addMovieButton() {
    console.log('add movie clicked');
    //add user input movie into the table and display it
    var input, userInput;
    input = document.getElementById('myMovie');
    userInput = input.value.toUpperCase();

  }

  //Filter the display table by the user input
  handleKeyUp() {
    var input, filter, table, tr, th;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementsByClassName('table');
    tr = document.getElementsByTagName('th');
    // console.log(tr[0].innerHTML);
    for (var i = 0; i < tr.length; i++) {
      if (tr) {
        if (tr[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>

        <div className = 'addMovie'>
        <input type="text" id="myMovie" className = 'addMovie' onKeyUp = {this.handleKeyUp} placeholder="Add movie title here..."></input>
        <button className = 'addMovieButton' onClick = {this.addMovieButton}>Add</button>
        </div>

        <div className = 'searchMovie'>
        <input type="text" id="myInput" className = 'addInput' onKeyUp = {this.handleKeyUp} placeholder="Search.."></input>
        <button className = 'button' onClick = {this.handleClick}>GO!</button>
        </div>

        <MovieList movies = {this.state.movies}/>
      </div>
    )
  }

};
export default App;