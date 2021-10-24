import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import Questions from './questions';
import Home from './Home.js';
import './Auth.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import authkey from './authkey.js';


class Auth extends Component {
    constructor(props) {
        super(props);
}
    responseGoogle=(response)=>{
        var profile = response.getBasicProfile();
        
        console.log('Welcome, ' + profile.getName());
        console.log(response);
        console.log(response.profileObj);
        

    }
    render() { 
       
          
        return (
            <div id="login">
                <GoogleLogin 
                clientId={authkey}
                buttonText="Sign in with Google"
                isSignedIn={true}
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </div>
            
        )
    }
}


export default Auth;