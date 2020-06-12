import React, { Component } from "react";
import "./AddAthletes.css";
//import "./AppHeader.js";

class AddAthletes extends Component {
  render() {
    return (
      <div className="Add-Ath">
        <header className="Add-Ath-Header">
          <button className="Back-button">Back</button>
          <p>EagleFLEX</p>
          <p>Add Athletes</p>
          <br></br>
        </header>

        <body className="Add-Ath-Body">
          <p>Athlete Name</p>
          <br></br>
          <select>Athlethe Name</select>
          <br></br>
          <button>Save</button>
        </body>
      </div>
    );
  }
}

export default AddAthletes;
