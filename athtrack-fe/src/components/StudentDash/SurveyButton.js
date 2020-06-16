import React from "react";
import { useHistory } from "react-router-dom";

function SurveyButton(props) {
  const history = useHistory();

  const routeChange = () => {
    let path = `/takesurvey`;
    history.push(path);
  };

  const mystyle = {
    width: "200px",
    height: "30px",
    backgroundColor: "white",
    borderRadius: "20px",
    border: "3px solid #b23f14",
    fontSize: "13px",
    verticalAlign: "bottom",
    marginTop: "40px",
  };

  return (
    <button style={mystyle} onClick={routeChange}>
      {props.buttonTitle}
    </button>
  );
}

export default SurveyButton;
