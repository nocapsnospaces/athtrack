import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import AthleteTable from "../AthleteTable";

import LogoutButton from "../Login/LogoutButton";
import AppHeader from "../AppHeader";
import AppSubHeader from "../AppSubHeader";

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
                    <LogoutButton buttonTitle="Logout"/>
                </div>
            </body>
        </div>
    );
}

export default TeamView;
//                <button className="ASButton">Assign Survey</button>
