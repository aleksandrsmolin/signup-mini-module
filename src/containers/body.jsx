import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/header';
import InputField from './inputField';
import Footer from '../components/footer';

import '../styles/style.css';


class Body extends Component {
  render() {
    return (
      <div className="body">
        <Header />
        <InputField />
        <Footer />
      </div>
    );
  }
}
export default Body;
