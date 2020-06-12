import React from 'react'
import { Link } from 'react-router-dom';
import AthleteTable from "../AthleteTable";
import LongButton from "../CoachDash/LongButton";
import AppHeader from "../AppHeader";
import AppSubHeader from "../AppSubHeader";

function TeamView() {
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
                <button className="ASButton">Assign Survey</button>
                <button className="CSButton">Create Survey</button>
                <button className="DSButton">Delete Survey</button>
                <LongButton buttonTitle="Logout"></LongButton>
            </body>
        </div>
    );
}

export default TeamView;