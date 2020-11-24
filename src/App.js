import React, {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [movies, setMovie] =useState(['Movie 1 ','Movie 2']);

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/movies/",{
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 00899e358115a9ecd55a2fec3a88b74c28ed6076'
      }
    }).then( resp => resp.json() )
    .then(resp => setMovie(resp))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className="layout">
          <div>
            { movies.map(movie=>{
              return <h2> {movie.title} </h2>
            })}
          </div>
          <div>Movie details</div>
      </div>
    </div>
  );
}

export default App;
