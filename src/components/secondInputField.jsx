import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';

const reasons = ['Coz', 'You shall not pass', 'reson1', 'reason2', 'reason3', 'money', 'beer'];

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const renderReasonsSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {reasons.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const SecondInputField = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date of Birth</label>
        <div>
          <label>
            <Field name="day" component="input" type="number" />
            {' '}
            DD
            <Field name="day" component={renderError} />
          </label>
          <label>
            <Field name="month" component="input" type="number" />
            {' '}
            MM
            <Field name="month" component={renderError} />
          </label>
          <label>
            <Field name="year" component="input" type="number" />
            {' '}
            YY
            <Field name="year" component={renderError} />
          </label>
        </div>
      </div>


      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="unspecified" />
            {' '}
            Unspecified
          </label>
          <Field name="sex" component={renderError} />
        </div>
      </div>


      <div>
        <label>Where did you hear about as?</label>
        <Field name="favoriteColor" component={renderReasonsSelector} />
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
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
})(SecondInputField);

