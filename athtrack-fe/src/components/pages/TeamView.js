import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom';
import AthleteTable from "../AthleteTable";

import LogoutButton from "../Login/LogoutButton";
import AppHeader from "../AppHeader";
import AppSubHeader from "../AppSubHeader";

class TeamView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            returnState: this.props.location.state,
            athletes: [],
            students: this.props.location.state.team.students,
            id: this.props.location.state.team.id,
            name: this.props.location.state.name
        };
    }

    addAthletes = () => {
        const { history } = this.props;
        let path = `/addAth`;
        history.push({ pathname: path, state: this.state.returnState });
    };

    render() {
        return (
            <div>
                <header className="Team-page-header">
                    <AppHeader />
                    <AppSubHeader title={this.state.name} />
                    <Link className="Back-button" to="/coachdash"></Link>
                    <button className="Add-button" onClick={this.addAthletes}>+</button>
                </header>
                <AthleteTable data={this.state.students}></AthleteTable>
                <button className="ASButton" onClick={this.routeChange}>Assign Survey</button>
                <button className="CSButton">Create Survey</button>
                <button className="DSButton">Delete Survey</button>
                <div
                    style={{
                        position: "absolute",
                        bottom: "0px",
                        width: "100%",
                        height: "60px",
                    }}
                >
                    <LogoutButton buttonTitle="Logout" />
                </div>
            </div>
        )
    };
}

export default TeamView;
