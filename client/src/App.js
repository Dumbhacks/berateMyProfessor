import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <p>I have...</p>
      <Link to="/questions">questions</Link>
      <Link to="/answers">answers</Link>
      <Switch>
      <Route path="/questions">
        <p>hello world questions</p>
      </Route>
      <Route path="/answers">
        <p>hello world answers</p>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;