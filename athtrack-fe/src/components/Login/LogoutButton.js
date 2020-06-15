import React from "react";
import { useHistory } from "react-router-dom";

function LogoutButton(props) {
  const history = useHistory();

  const doLogout = () => {
    fetch("http://localhost:3000/api/v1/logout/", {
      method: "GET"
    }).then(response => {handleResponse(response)});
  }
  
  const handleResponse = (response) => {
    if (response.status === 200) {
      let path = `/`;
      history.push(path);
    }

  };

  const mystyle = {
    width: "400px",
    height: "30px",
    backgroundColor: "#B23F14",
    border: "2px solid #ffffff",
    color: "white",
    borderRadius: "8px",
    fontSize: "13px",
    textTransform: "Uppercase",
    marginTop: "5px",
  };
  return (
    <div>
      <button style={mystyle} onClick={doLogout}>
        {props.buttonTitle}
      </button>
    </div>
  );
}

export default LogoutButton;