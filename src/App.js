import React, {useState, useEffect} from 'react'
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from "./components/movie-form";

function App() {

  const [movies, setMovies] =useState(['Movie 1 ','Movie 2']);
  const [selectedMovie, setSelectedMovie] =useState(null);
  const [editedMovie, setEditedMovie] =useState(null);

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/movies/",{
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 00899e358115a9ecd55a2fec3a88b74c28ed6076'
      }
    }).then( resp => resp.json() )
    .then(resp => {setMovies(resp) ; return resp})
    .then(resp => { console.log('App useEffect'); console.log(resp) } )
    .catch(error => console.log(error))
  }, [])

  const loadMovie = movie =>{
    setSelectedMovie(movie);
    setEditedMovie(null)
  }

  const editClicked = movie =>{
    setEditedMovie(movie)
    setSelectedMovie(null)
  }

  const updateMovie = movie =>{
    const newMovies = movies.map( mov =>{
      if( mov.id === movie.id )
        return movie
      else
        return mov
    } )

    setMovies(newMovies);
  }

  const newMovie = () =>{
    setEditedMovie({title:"",description:""});
  }

  const movieCreate = (movie)=>{
    const newMovies = [...movies, movie];
    setMovies(newMovies);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className="layout">
        <div>
          <MovieList movies={movies} movieClicked={loadMovie} editClicked={editClicked}></MovieList>
          <button onClick={ newMovie } >newMovie</button>
        </div>
          <MovieDetails movie={selectedMovie} updateMovie={loadMovie} ></MovieDetails>
          { editedMovie ? <MovieForm movie={editedMovie} updateMovie={updateMovie} movieCreate={movieCreate}/> : null}
      </div>
    </div>
  );
}

export default App;
