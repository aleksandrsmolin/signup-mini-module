import React, { Component } from 'react';

import '../styles/style.css';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header" >
        <h3 className="h3"> Signup </h3>
        <div className="progress-bar">
        <div className="first-progress-bar" />
        </div>
      </div>
    );
  }
}

export default Header;
