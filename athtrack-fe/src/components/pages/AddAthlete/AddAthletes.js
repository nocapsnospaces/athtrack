import React, { Component } from "react";
import AppHeader from "../../AppHeader";
import AppSubHeader from "../../AppSubHeader";
import "./AddAthletes.css";
import { Multiselect } from 'multiselect-react-dropdown';
import { Link} from "react-router-dom";

class AddAthletes extends Component {

  constructor(props) {
    super(props);
    this.multiselectRef = React.createRef();
    this.addAthletes = this.addAthletes.bind(this);
    this.state = {
      returnState: this.props.location.state,
      athletes: [],
      team: this.props.location.state.team.id
    };
  }

  redirectToHome = () => {
    const { history } = this.props;
    let path = `/team`;
    history.push({ pathname: path, state: this.state.returnState });
   }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/athletes/", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        this.setAthletes(data);
      });
  }

  //add the selected athletes to the team
  addAthletes() {
    
    var TBAAthletes = this.multiselectRef.current.getSelectedItems();
    if(TBAAthletes.length > 0){
    var ids = [];
    for (var i = 0; i < TBAAthletes.length; i++) {
      ids.push(TBAAthletes[i].id);
    }
    var Addurl = "http://localhost:5000/api/v1/team/" + String(this.state.team) + "/add";
    fetch(Addurl, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ students: ids })
    })
    .then(res => {this.redirectToHome()})
  }
  else{this.redirectToHome()}

  }

  setAthletes(data) {
    var athletes = [];
    for (var i = 0; i < data.students.length; i++) {
      athletes.push(
        {
          name: data.students[i].name,
          id: data.students[i].id
        }
      );
    }
    this.setState({ athletes: athletes });
  }

  render() {
    const { athletes } = this.state;
    const { history } = this.props;

    return (
      <div className="Add-Ath">
        <header>
          <Link className="Back-button" to="/team"></Link>
          <AppHeader />
          <AppSubHeader title="Add Athlete" />
        </header>
        <div>
          <br></br>
          <Multiselect
            options={this.state.athletes} // Options to display in the dropdown
            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            showCheckbox={true}
            closeOnSelect={false}
            ref={this.multiselectRef}
            // onSelect={this.onSelect} // Function will trigger on select event
            // onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
          <br></br>
          <button
            type="submit"
            onClick={this.addAthletes}>Save</button>
        </div>
      </div>
    );
  }
}
export default AddAthletes;
