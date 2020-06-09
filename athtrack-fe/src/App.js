import React, { useState, useEffect } from "react";
import "./App.css";
import CoachDash from "./components/CoachDash/CoachDash";
import AddAthletes from "./components/AddAthletes/AddAthletes";

function App() {
  return (
    <div className="App">
      <AddAthletes />
    </div>
  );
}

export default App;
