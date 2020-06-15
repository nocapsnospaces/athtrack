import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import AthleteTable from "../AthleteTable";
import LongButton from "../CoachDash/LongButton";
import AppHeader from "../AppHeader";
import AppSubHeader from "../AppSubHeader";
import CoachDash from "../CoachDash/CoachDash";

function TeamView() {

    const history = useHistory();

    const routeChange = () => {
        let path = `/survey`;
        history.push(path);
    };

    return (
        <div>
            <header className="Team-page-header">
                <AppHeader />
                <AppSubHeader title="Team" />
                <Link className="Back-button" to="/home"></Link>
                <button className="Add-button">+</button>
            </header>
            <body className="Team-page-body">
                <AthleteTable />
                <button className="ASButton" onClick={routeChange}>Assign Survey</button>
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
                    <LongButton buttonTitle="Logout"></LongButton>
                </div>
            </body>
        </div>
    );
}

export default TeamView;
//                <button className="ASButton">Assign Survey</button>
