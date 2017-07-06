import React, { Component } from 'react';
import FirstInputField from '../components/firstInputField';
import SecondInputField from '../components/secondInputField';
import FinalInputField from '../components/finalInputField';

import '../styles/style.css';


class InputField extends Component {

  render() {
    return (
      <div className="inputField">
        <SecondInputField />
      </div>
    );
  }
}
export default InputField;
