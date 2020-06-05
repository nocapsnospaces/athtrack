import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>EagleFLEX</p>
      </header>

      <body className="App-body">
        <input className="Usrname-input" value="Email"></input>
        <br></br>
        <input className="Password-input" value="Password"></input>
        <br></br>
        <button className="Login-button">Login</button>
      </body>
    </div>
  );
}

export default App; //Testing
