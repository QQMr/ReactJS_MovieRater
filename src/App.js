import React, {useState, useEffect} from 'react'
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';

function App() {

  const [movies, setMovie] =useState(['Movie 1 ','Movie 2']);
  const [selectedMovie, setSelectedMovie] =useState(null);

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/movies/",{
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 00899e358115a9ecd55a2fec3a88b74c28ed6076'
      }
    }).then( resp => resp.json() )
    .then(resp => {setMovie(resp) ; return resp})
    .then(resp => { console.log('App useEffect'); console.log(resp) } )
    .catch(error => console.log(error))
  }, [])

  const movieClicked = movie =>{
    console.log(movie.title);
    setSelectedMovie(movie)
  }

  const loadMovie = movie =>{
    setSelectedMovie(movie);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className="layout">
          <MovieList movies={movies} movieClicked={movieClicked}></MovieList>
          <MovieDetails movie={selectedMovie} updateMovie={loadMovie} ></MovieDetails>
      </div>
    </div>
  );
}

export default App;
