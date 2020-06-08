import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./App.css";
import TeamView from "./components/pages/TeamView";
import { Link } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
        <Route exact path="/" render={props => (
          <div className="App">
            <React.Fragment>
              <header className="App-header">
                <p>EagleFLEX</p>
              </header>
              <body className="App-body">
                <input className="Usrname-input" value="Email"></input>
                <br></br>
                <input className="Password-input" value="Password"></input>
                <br></br>
                <button className="Login-button">Login</button>
                <Link to="/team">Team 1</Link>
              </body>
            </React.Fragment>
            </div>
        )} />
        <Route path="/team" component={TeamView}/>
      </Router>
    );
  }
}

export default App; //Testing
