import React, {useState, useEffect} from 'react'
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from "./components/movie-form";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFilm, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { useCookies } from 'react-cookie'

function App() {

  const [movies, setMovies] =useState(['Movie 1 ','Movie 2']);
  const [selectedMovie, setSelectedMovie] =useState(null);
  const [editedMovie, setEditedMovie] =useState(null);

  const [token, setToken,deleteToken] = useCookies(['mr-token']);


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

  useEffect(()=>{
    console.log("useEffect");
    console.log(token);
    if( !token['mr-token'] || token['mr-token'] ==='undefined' ) window.location.href=  "/";

  },[token])

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

  const removeClicked = (movie)=>{
    const newMovies = movies.filter( mov => mov.id !== movie.id )
    setMovies(newMovies);
  }

  const logoutUser = () =>{
    deleteToken(['mr-token']);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <FontAwesomeIcon icon={faFilm}/> 
          <span>Movie rater</span>
        </h1>
        <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser}/>
      </header>
      <div className="layout">
        <div>
          <MovieList 
            movies={movies} 
            movieClicked={loadMovie} 
            editClicked={editClicked}
            removeClicked={removeClicked}>
          </MovieList>
          <button onClick={ newMovie } >newMovie</button>
        </div>
          <MovieDetails movie={selectedMovie} updateMovie={loadMovie} ></MovieDetails>
          { editedMovie ? <MovieForm movie={editedMovie} updateMovie={updateMovie} movieCreate={movieCreate}/> : null}
      </div>
    </div>
  );
}

export default App;
