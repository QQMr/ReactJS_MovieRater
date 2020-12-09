const TOKEN = "00899e358115a9ecd55a2fec3a88b74c28ed6076"

export class API{
    static updateMovie(mov_id,body) {
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`,{
            method:'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json() )
    }
}