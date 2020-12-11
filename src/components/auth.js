import React, { useContext, useEffect, useState } from 'react'
import {API} from "../api-service"
import { TokenContext } from '../index'

function Auth(){

    const [ username,setUsername] = useState('');
    const [ password,setPssword] = useState('');

    const {token, setToken} = useContext(TokenContext);

    useEffect(()=>{
        console.log(token);
        if(token) window.location.href=  "/movies";
    },[token])

    const loginClicked = () => {
        API.LoginUser( {username,password} )
            .then(resp => {console.log(resp); setToken(resp.token); } )
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