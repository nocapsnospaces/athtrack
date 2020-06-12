import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import CoachDash from "./components/CoachDash/CoachDash";
import AddAthletes from "./components/AddAthletes/AddAthletes";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}
/* class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/home" component={CoachDash} />
          <Route path="/team" component={TeamView} />
        </div>
      </Router>
    );
  }
}
*/

export default App;
