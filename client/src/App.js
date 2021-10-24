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
import Questions from './questions';
class Component1 extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            <title>Page 1</title>
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
          <Questions />
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