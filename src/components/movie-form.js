import React, { useEffect, useState } from 'react';
import {API} from "../api-service"

function MovieForm(props) {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    useEffect( ()=>{
        setTitle(props.movie.title);
        setDescription(props.movie.description)

    }, [props.movie])

    const updateClicked = () =>{
        console.log('update here');
        API.updateMovie(props.movie.id,{title,description})
        .then( resp => {console.log(resp); return resp; })
        .then( resp => props.updateMovie(resp))
        .catch(error => console.log(error));
        
    }

    const cteateClicked = () =>{
        console.log('update here');
        API.createMovie( {title,description})
        .then( resp => {console.log(resp); return resp; })
        .then( resp => props.movieCreate(resp))
        .catch(error => console.log(error));
        
    }

    return(
        <React.Fragment>
        { 
            props.movie ? (
            <div>
                <label htmlFor="title" >Title</label><br/>
                <input id="title" type="text" placeholder="title" value={title}
                        onChange = { evt => setTitle(evt.target.value) }
                /><br/>
                <label htmlFor="description" type="text">Description</label><br/>
                <textarea id="description" type="text" placeholder="description"
                            value ={description}
                            onChange = { evt => setDescription(evt.target.value) }
                ></textarea><br/>
                { 
                props.movie.id?(
                <button onClick = {updateClicked } >Update</button>
                ):
                <button onClick = {cteateClicked } >Create</button>
                    
                }
            </div>
    
            ): null
        }
        </React.Fragment> 
    )
}

export default MovieForm;