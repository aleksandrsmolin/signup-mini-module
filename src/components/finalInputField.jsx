import React, { Component } from 'react';
import '../styles/style.css';


class FinalInputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="finalInputField">
        <img className="img" src={require('../styles/email.svg')} alt="some shit" />
        <button className="finalInputField-button">Go to Dashboard</button>
      </div>
    );
  }
}

export default FinalInputField;
