import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import renderField from '../renderField';

import '../styles/style.css';

const FirstInputField = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3 className="header" >
          Signup
        </h3>
      </div>
      <div className="progress-bar" >
        <div className="first-progress-bar" />
      </div>
      <div className="inputField" >
        <div className="first-input-field" >
          <Field
            name="email"
            type="email"
            component={renderField}
            label="EMAIL"
          />
          <Field
            name="password"
            type="text"
            component={renderField}
            label="PASSWORD"
          />
          <Field
            name="passwordConfirm"
            type="text"
            component={renderField}
            label="CONFIRM PASSWORD"
          />
        </div>
      </div>
      <div className="footer" >
        <button className="footer-button-next-1" type="submit">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(FirstInputField);

