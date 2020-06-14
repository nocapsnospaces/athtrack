import React, { Component, useEffect } from "react";
import AppHeader from "../../AppHeader";
import AppSubHeader from "../../AppSubHeader";
import "./AddAthletes.css";
import Select from "react-select";
//Requires yarn add react-select
import { Link } from "react-router-dom";

/* format = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
]; */

class AddAthletes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      athleteNames: [],
      ath: null,
    };
  }

  componentDidMount() {
    fetch("https://localhost:3000/api/v1/athletes", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.print(data);
      });
  }

  setAthletes(data) {
    var names = [];
    for (var i = 0; i < data.number; i++) {
      names.push(data.teams[i].name);
    }
    this.setState({ athleteNames: names, ath: data });
  }

  render() {
    const { athleteNames } = this.state;
    return (
      <div className="Add-Ath">
        <header>
          <Link className="Back-button" to="/team"></Link>
          <AppHeader />
          <AppSubHeader title="Add Athlete" />
        </header>

        <body className="Add-Ath-Body">
          <p>Athlete Name</p>
          <br></br>
          <script>toConsole('Test')</script>
          <br></br>
          <button type="save">Save</button>
        </body>
      </div>
    );
  }
}

export default AddAthletes;
