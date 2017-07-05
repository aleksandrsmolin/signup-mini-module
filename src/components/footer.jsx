import React, { Component } from 'react';

import '../styles/style.css';


class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <button className="footer-button-next"> Next </button>
      </div>
    );
  }
}

export default Footer;
