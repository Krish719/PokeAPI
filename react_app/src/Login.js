import {useState} from 'react'
import {setToken, fetchToken} from './Authentication.js'
import {useNavigate} from "react-router-dom";
const axios = require('axios');
export default function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = () =>{
        if(username === '' && password === ''){
            return
        }else{
            console.log('axios')
            axios.post('http://localhost:8000/login', {
                username: username,
                password: password
            })
            .then(function (response) {
                if(response.data.token){
                    
                    setToken(response.data.token)
                    navigate("/profile");
                }
            })
            .catch(function (error) {
                console.log(error, 'error');
            });
        }
       
    }
    return(
        <>
           
            <div style = {{minHeight: 800, marginTop: 20 }}>
                <h1>PokeDex Login</h1>
                <div style = {{marginTop: 50 }} >
                    {
                        fetchToken() 
                        ? (
                            <p>You are logged into PokeDex!</p>
                        ) 
                        : (
                            <form>
                            <label style = {{marginRight: 10 }}>Username: </label>
                            <input type = 'text'  onChange={ (e)=> setUsername(e.target.value)} /><br></br>
                            <label style = {{marginRight: 10 }}>Password: </label>
                            <input type = 'password'  onChange={ (e)=> setPassword(e.target.value)} /><br></br>
                            <button type = 'button' onClick = {login}>Login</button>
                        </form>
                        )
                    }
                   
                </div>
            </div>
            
        </>
    )
}