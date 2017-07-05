import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/header';
import InputField from '../components/inputField';
import Footer from '../components/footer';


class Body extends Component {
  render() {
      return (
          <div >
            <Header />
            <InputField />
            <Footer/>
          </div>
      );
  }
}
export default Body;