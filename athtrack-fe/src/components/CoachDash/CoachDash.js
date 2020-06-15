import React, { Component, useEffect } from "react";
import "./CoachDash.css";
import AppHeader from "../AppHeader";
import AppSubHeader from "../AppSubHeader";
import TeamButton from "./TeamButton";
import LongButton from "./LongButton";
import { Link, useHistory } from "react-router-dom";

class CoachDash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamTitles: [],
      teams: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/v1/team/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setTeamTitles(data);
      });
    //this.setState({ hits: data.teamTitles })
  }

  setTeamTitles(data) {
    var titles = [];
    for (var i = 0; i < data.number; i++) {
      titles.push(data.teams[i].name);
    }
    this.setState({ teamTitles: titles, teams: data });
  }

  render() {
    const { teamTitles } = this.state;
    return (
      <div className="CoachDash">
        <AppHeader />
        <AppSubHeader title="Welcome" />
        {teamTitles.map(function (team) {
          return (
            <div>
              <TeamButton buttonTitle={team}></TeamButton>
            </div>
          );
        })}
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            width: "100%",
            height: "60px",
          }}
        >
          <LongButton buttonTitle="Manage"></LongButton>
          <LongButton buttonTitle="Logout"></LongButton>
        </div>
      </div>
    );
  }
}

export default CoachDash;
