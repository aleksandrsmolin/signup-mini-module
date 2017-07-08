import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import renderField from '../renderField';

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
      <div className="inputField " >
        <div className="firstInputField-input">
          <Field name="email" type="email" component={renderField} label="Email" />
        </div>
        <Field
          name="password"
          type="text"
          component={renderField}
          label="Password"
        />
        <Field
          name="passwordConfirm"
          type="text"
          component={renderField}
          label="Confirm Password"
        />
      </div>
      <div>
        <button type="submit" className="next">Next</button>
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

