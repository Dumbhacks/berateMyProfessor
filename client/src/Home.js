import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import React from 'react';
function Home() {
    return(
        <div id="maincontent">
            <body>
            <h1>I have...</h1>
            {/* questions */}
            <div id="questions">
                <Link to="/questions" style={{ textDecoration: 'none' }}><h2>questions</h2></Link>
            </div>
            {/* answers */}
            <div id="answers">
            <Link to="/answers" style={{ textDecoration: 'none' }}><h2>answers</h2></Link>
            </div>
            </body>
        </div>
    )
}
export default Home;

