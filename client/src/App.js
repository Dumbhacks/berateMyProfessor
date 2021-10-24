import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js';
import React from 'react';
import MetaTags from 'react-meta-tags';
class Component1 extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            <title>BerateMyProfessor</title>
            <meta name="description" content="Some description." />
            <meta name="viewport" content="width=devicewidth, initial-scale=1.0"></meta>
          </MetaTags>
          {/* <div className="content"> Some Content </div> */}
        </div>
      )
  }
}

function App() {
  
  return (
    
    <Router>
      {/* <div id="header"></div> */}
        <Switch>

          <Route path="/questions">
            <p>hello world questions</p>
          </Route>
          <Route path="/answers">
            <p>hello world answers</p>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;