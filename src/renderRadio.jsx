import React from 'react';
import './styles/style.css';


const renderRadio = ({ input, label, type, id, meta: { checked } }) => (
  <div className="secondInputField-sex-button-off"  >
    <label htmlFor={id}>{label}</label>
    <input {...input} type={type} id={id} />
  </div>
);

export default renderRadio;
