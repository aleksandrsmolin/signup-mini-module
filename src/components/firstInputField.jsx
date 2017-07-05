import React, { Component } from 'react';
import '../styles/style.css';

class FirstInputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="firstInputField" >
        <div>
          <p className="firstInputField-title-normal"> EMAIL IS REQUIRED </p>
          <input className="firstInputField-input-normal" type="text" />
        </div>
        <div>
          <p className="firstInputField-title-normal" > PASSWORD </p>
          <input className="firstInputField-input-normal" type="text" />
        </div>
        <div>
          <p className="firstInputField-title-normal"> CONFIRM PASSWORD </p>
          <input className="firstInputField-input-normal" type="text" />
        </div>
      </div>
    );
  }
}

export default FirstInputField;
