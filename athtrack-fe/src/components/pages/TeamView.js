import React from 'react'
import { Link } from 'react-router-dom';
import AthleteTable from "../AthleteTable";

function TeamView() {
    return (
        <div>
            <header className="Team-page-header">
                <Link className="Back-button" to="/"></Link>
                <button className="Add-button">+</button>
                <p> EagleFLEX </p>
            </header>
            <body className="Team-page-body">
                <p> T E A M  1</p>
                <AthleteTable />
                <button className="ASButton">Assign Survey</button>
                <button className="CSButton">Create Survey</button>
                <button className="DSButton">Delete Survey</button>
                {/* <LongButton /> */ }
            </body>
        </div>
    );
}

export default TeamView;