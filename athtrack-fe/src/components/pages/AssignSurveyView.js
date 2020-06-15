import React from 'react';
import { Link } from 'react-router-dom';
import SurveyTable from "../SurveyTable";
import AppHeader from "../AppHeader";
import AppSubHeader from "../AppSubHeader";

function AssignSurveyView() {

    return (
        <div>
            <header className="Survey-page-header">
                <AppHeader />
                <AppSubHeader title="Assign Survey" />
                <Link className="Back-button" to="/team"></Link>
            </header>
            <body className="Survey-page-body">
                <SurveyTable />
                <div
                    style={{
                        position: "absolute",
                        bottom: "0px",
                        width: "100%",
                        height: "60px",
                    }}
                >
                <button className="Save-button">SAVE</button>
                </div>
            </body>
        </div>
    );
}

export default AssignSurveyView;