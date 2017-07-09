import React from 'react';
import './styles/style.css';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    {!error ? <label className="lable-title">{label}</label> : <span className="title-error">{error}</span> }
    <div>
      <input className="firstInputField-input" {...input} type={type} />
    </div>
  </div>
);

export default renderField;
