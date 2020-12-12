import React, {  useEffect, useState } from 'react'
import {API} from "../api-service"
import { useCookies } from 'react-cookie'

function Auth(){

    const [ username,setUsername] = useState('');
    const [ password,setPssword] = useState('');
    const [ isLoginView,setIsLoginView] = useState(false);

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

    const registerUserClicked = () => {
        API.registerUser( {username,password} )
            .then(resp => {console.log(resp); loginClicked(); } )
            .catch( error => console.log(error))
    }

    return(
        <div>
                {isLoginView? <h1>Login</h1> : <h1>Register</h1> }
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

                {isLoginView? 
                    <button onClick = { loginClicked } >Login</button> :
                    <button onClick = { registerUserClicked } >Register</button>
                }
               
                
                    
                {isLoginView? 
                    <p onClick={()=>{setIsLoginView(false)}}>You don't have an account? Register here</p> :
                    <p onClick={()=>{setIsLoginView(true)}}>You already have an account? Login here</p>
                }               
        </div>
    )
}

export default Auth;