import React from "react";
import { CLIENT_SECRET, REDIRECT_URL_AFTER_LOGIN, SPOTIFY_AUTHORIZE_ENDPOINT, CLIENT_ID } from "../../auth";
import Card from '../../components/LoginCard';
import "./index.css";
const Login = () => {
    
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=user-read-private user-top-read user-read-email playlist-read-private&response_type=token&show_dialog=true`;
    }
    return (
        
        
        <div className = 'login'>
        <Card>
        <div className="login-prompt">
            <h1 className="title">mixtape.mee</h1>
            <h2 className="subtitle">
                Get your own customized mixtape all with one click. 
                
            </h2>
            <button className = "login_button" onClick={() => handleLogin()}>Login with Spotify</button>
   
        </div>
            
        </Card>
        </div>
    )
}

export default Login;