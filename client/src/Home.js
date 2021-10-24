import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React, {Component} from 'react';
import './App.css';
import MetaTags from 'react-meta-tags'; 
import Auth from './Auth.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {goto: ""};
    }
    changeQuestion = () => {
        this.setState(()=>{
            return {goto: "questions"}
        });
    }

    changeAnswer = () => {
        this.setState(()=>{
            return {goto: "answers"}
        });
    }
    render() {
        return (
            <body>
            <div id="maincontent">
                <div id="header">
                    <h1>I have...</h1>
                </div>

                {/* questions */}
                <div id="questions">
                    <Link onClick={this.changeQuestion} to="/auth/questions" style={{ textDecoration: 'none' }}><h2>Questions</h2></Link>
                </div>

                {/* answers */}
                <div id="answers">
                    <Link onClick={this.changeAnswer} to="/auth/answers" style={{ textDecoration: 'none' }}><h2>Answers</h2></Link>
                </div>
            </div>
        </body>
        );
    }
}

export default Home;

