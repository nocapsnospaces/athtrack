import React, { Component } from "react";
import "./CoachDash.css";
import appheader from "../AppHeader";
import AppHeader from "../AppHeader";
import AppSubHeader from "../AppSubHeader";
import TeamButton from "./TeamButton";
import LongButton from "./LongButton";
import { Link } from 'react-router-dom';

class CoachDash extends Component {
  render() {
    const teamTitles = ["Team 1", "Team 2", "Team 3"];
    return (
      <div className="CoachDash">
        <AppHeader />
        <AppSubHeader title="Welcome" />
        {teamTitles.map(function (team) {
          return (
            <div>
              <Link to="/team"></Link>
              <TeamButton teamTitle={team}></TeamButton>
            </div>
          );
        })}
        <LongButton title="Manage"></LongButton>
        <LongButton title="Logout"></LongButton>
      </div>
    );
  }
}

export default CoachDash;
