import React, { Component } from 'react';
import '../styles/style.css';

class SecondInputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="secondInputField">
        <div>
          <p> DATE OF BIRTH </p>
          <div className="ageSection">
            <input className="secondInputField-age-input" type="text" placeholder="DD" />
            <input className="secondInputField-age-input" type="text" placeholder="MM" />
            <input className="secondInputField-age-input" type="text" placeholder="YY" />
          </div>
        </div>
        <div>
          <p> GENDER </p>
          <button className="secondInputField-gen-button">MALE </button>
          <button className="secondInputField-gen-button">FEMALE </button>
          <button className="secondInputField-gen-button">UNSPECIFIED </button>
        </div>
        <div>
          <p> WHERE DID YOU HEAR ABOUT IS? </p>
          <input className="secondInputField-dropdown" type="text" placeholder="dropdownMenu" />
        </div>
      </div>
    );
  }
}

export default SecondInputField;
