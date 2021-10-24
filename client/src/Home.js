import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from 'react';
import './App.css';
import MetaTags from 'react-meta-tags'; 


function Home() {
    return(
        <body>
            <div id="maincontent">
                <div id="header">
                    <h1>I have...</h1>
                </div>

                {/* questions */}
                <div id="questions">
                    <Link to="/questions" style={{ textDecoration: 'none' }}><h2>Questions</h2></Link>
                </div>

                {/* answers */}
                <div id="answers">
                    <Link to="/answers" style={{ textDecoration: 'none' }}><h2>Answers</h2></Link>
                </div>
            </div>
        </body>
    )
}
export default Home;

