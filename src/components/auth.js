import React, {  useEffect, useState } from 'react'
import {API} from "../api-service"
import { useCookies } from 'react-cookie'

function Auth(){

    const [ username,setUsername] = useState('');
    const [ password,setPssword] = useState('');

    const [token, setToken] = useCookies(['mr-token']);

    useEffect(()=>{
        console.log(token);
        console.log(typeof(token['mr-token']));
        if(token['mr-token'] && token['mr-token']!=='undefined' ) window.location.href=  "/movies";

    },[token])

    const loginClicked = () => {
        API.LoginUser( {username,password} )
            .then(resp => {console.log(resp); setToken('mr-token',resp.token); } )
            .catch( error => console.log(error))
    }
    return(
        <div>
                <label htmlFor="username" >username</label><br/>
                <input id="username" type="text" placeholder="username" value={username}
                        onChange = { evt => setUsername(evt.target.value) }
                /><br/>
                <label htmlFor="password" type="text">password</label><br/>
                <input id="password" type="password" placeholder="password"
                            value ={password}
                            onChange = { evt => setPssword(evt.target.value) }
                ></input>
                <br/>
               
                <button onClick = { loginClicked } >Login</button>
                    
               
        </div>
    )
}

export default Auth;