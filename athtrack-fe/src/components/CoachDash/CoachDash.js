import React, { Component } from "react";
import AppHeader from "../AppHeader";
import AppSubHeader from "../AppSubHeader";
import TeamButton from "./TeamButton";
import LongButton from "./LongButton";
import LogoutButton from "../Login/LogoutButton";


class CoachDash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamTitles: [],
      teams: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/team/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setTeamTitles(data);
      });
  }

  setTeamTitles(data) {
    var titles = [];
    for (var i = 0; i < data.number; i++) {
      titles.push({
        name: data.teams[i].name,
        team: data.teams[i],
        data: null
      });
    }
    this.setState({ teamTitles: titles, teams: data });
  }

    routeChange () {
      const { history } = this.props;
      let path = `/survey`;
      if (history) history.push(path);
  };

  handleTeam(data) {
    const { history } = this.props;
    let path = `/team`;
    history.push({ pathname: path, state: data });

  };

  render() {

    return (
      <div className="CoachDash">
        <AppHeader />
        <AppSubHeader title="Welcome" />
        {this.state.teamTitles.map((team, id) =>
          <div key={id}><button
            style={{
              width: "200px",
              height: "30px",
              backgroundColor: "white",
              borderRadius: "20px",
              border: "3px solid #b23f14",
              fontSize: "13px",
              verticalAlign: "bottom",
              marginTop: "40px",
            }}
            onClick={e => { this.handleTeam(team) }}
          >{team.name}</button></div>
        )
        }
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            width: "100%",
            height: "60px",
          }}
        >
          <LongButton buttonTitle="Manage"></LongButton>
          <LogoutButton buttonTitle="Logout"></LogoutButton>
        </div>
      </div >
    );
  }
}

export default CoachDash;
