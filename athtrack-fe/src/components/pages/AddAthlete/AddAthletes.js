import React, { Component, useEffect } from "react";
import AppHeader from "../../AppHeader";
import AppSubHeader from "../../AppSubHeader";
import "./AddAthletes.css";
import Select from "react-select";
//Requires yarn add react-select
import { Link } from "react-router-dom";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const getAthAPI = (e) => {};

class AddAthletes extends Component {
  render() {
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
          <Select options={options} isMulti name="name" />
          <br></br>
          <button type="save" onClick={getAthAPI}>
            Save
          </button>
        </body>
      </div>
    );
  }
}

export default AddAthletes;
