import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import CoachDash from "./components/CoachDash/CoachDash";
import TeamView from "./components/pages/TeamView";
import Login from "./components/Login/Login";
import AssignSurveyView from "./components/pages/AssignSurveyView";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/home" component={CoachDash} />
          <Route path="/team" component={TeamView} />
          <Route path="/survey" component={AssignSurveyView} />
        </div>
      </Router>
    );
  }
}

export default App;
