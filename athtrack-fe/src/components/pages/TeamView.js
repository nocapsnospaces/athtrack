import React from "react";
import { Link } from "react-router-dom";
import AthleteTable from "../AthleteTable";
import LongButton from "../CoachDash/LongButton";

function TeamView() {
  return (
    <div>
      <header className="Team-page-header">
        <Link className="Back-button" to="/home"></Link>
        <button className="Add-button">+</button>
        <p> EagleFLEX </p>
      </header>
      <body className="Team-page-body">
        <p> T E A M 1</p>
        <AthleteTable />
        <form action="http://localhost:3000/addAth">
          <input type="submit" value="Add Athlete" />
        </form>
        <button className="CSButton">Create Survey</button>
        <button className="DSButton">Delete Survey</button>
        {/* <LongButton /> */}
      </body>
    </div>
  );
}

export default TeamView;
//                <button className="ASButton">Assign Survey</button>
