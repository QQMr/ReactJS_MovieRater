//const TOKEN = "00899e358115a9ecd55a2fec3a88b74c28ed6076"

//const urlpath =  'http://127.0.0.1:8000/auth/' ;
//const urlpath = 'http://192.168.0.101:8000/';
const urlpath = 'https://movie-rater-tutorial-burton.herokuapp.com/';

export {urlpath};

export class API{

    static LoginUser(body) {
      return fetch(urlpath+`auth/`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then( resp => resp.json() )
    }

    static registerUser(body) {
      return fetch(urlpath+`api/users/`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then( resp => resp.json() )
    }
    
    static getMovies(TOKEN) {
      return fetch(urlpath+"api/movies/",{
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${TOKEN}`
        }
      }).then( resp => resp.json() )
    }

    static updateMovie(mov_id,body,TOKEN) {
        return fetch(urlpath+`api/movies/${mov_id}/`,{
            method:'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json() )
    }

    static createMovie(body,TOKEN) {
        return fetch(urlpath+`api/movies/`,{
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json() )
    }

    static deleteMovie(mov_id,TOKEN) {
        return fetch(urlpath+`/api/movies/${mov_id}/`,{
            method:'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
          })
    }
}