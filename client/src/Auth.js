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
    Link,
} from "react-router-dom";

import authkey from './authkey.js';


class Auth extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params.next,"this is next pr")
}
    responseGoogle=(response)=>{
        var profile = response.getBasicProfile();
        
        console.log('Welcome, ' + profile.getName());
        console.log(response);
        console.log(response.profileObj);
        console.log("this is my status hello hello: " + this.props.match.params.next);
        if(this.props.match.params.next == "questions") {
            this.props.history.push('/questions')
        }
        else if(this.props.match.params.next == "answers") {
            this.props.history.push('/answers')
        }
    }

    render() { 

        return (
            
            <div id="login">
                <div>{this.props.status}</div>
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