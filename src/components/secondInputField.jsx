import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import '../styles/style.css';

const reasons = ['Coz', 'You shall not pass', 'reson1', 'reason2', 'reason3', 'money', 'beer'];

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const renderReasonsSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a reason...</option>
      {reasons.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

function validateDay(event) {
  const value = document.getElementById('day').value;
  if (value > 31 || /([e])/g.test(event.target.value)) {
    return event.preventDefault();
  }
}

function validateMonth(event) {
  const value = document.getElementById('month').value;
  if (value > 12) {
    return event.preventDefault();
  }
}

function validateYear(event) {
  const value = document.getElementById('year').value;
  if (value > 2017) {
    return event.preventDefault();
  }
}

const SecondInputField = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date of Birth</label>
        <div>
          <label>
            DD
            <Field name="day" id="day" component="input" type="number" onChange={(e) => validateDay(e)} />
            {' '}
            <Field name="day" component={renderError} />
          </label>
          <label>
            MM
            <Field name="month" id="month" component="input" type="number" onChange={(e) => validateMonth(e)} />
            {' '}
            <Field name="month" component={renderError} />
          </label>
          <label>
            YY
            <Field name="year" id="year" component="input" type="number" onChange={(e) => validateYear(e)} />
            {' '}

            <Field name="year" component={renderError} />
          </label>
          <label>
            <Field name="age" component={renderError} />
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
      <div className="footer">
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

