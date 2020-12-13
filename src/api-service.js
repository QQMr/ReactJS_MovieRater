//const TOKEN = "00899e358115a9ecd55a2fec3a88b74c28ed6076"

export class API{

    static LoginUser(body) {
      return fetch(`http://127.0.0.1:8000/auth/`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then( resp => resp.json() )
    }

    static registerUser(body) {
      return fetch(`http://127.0.0.1:8000/api/users/`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then( resp => resp.json() )
    }
    
    static getMovies(TOKEN) {
      return fetch("http://127.0.0.1:8000/api/movies/",{
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${TOKEN}`
        }
      }).then( resp => resp.json() )
    }

    static updateMovie(mov_id,body,TOKEN) {
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`,{
            method:'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json() )
    }

    static createMovie(body,TOKEN) {
        return fetch(`http://127.0.0.1:8000/api/movies/`,{
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json() )
    }

    static deleteMovie(mov_id,TOKEN) {
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`,{
            method:'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
          })
    }
}