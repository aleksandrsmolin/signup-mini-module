import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import '../styles/style.css';

const reasons = ['Coz', 'You shall not pass', 'reson1', 'reason2', 'reason3', 'money', 'beer'];

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const renderReasonsSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select className="secondInputField-dropdown" {...input}>
      <option value=""></option>
      {reasons.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span className="title-error">{error}</span>}
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
        <h3 className="header" >
          Signup
        </h3>
      </div>
      <div className="progress-bar" >
        <div className="second-progress-bar" />
      </div>
      <div className="secondInputField" >
        <div>
          <h3 className="secondInputField-header" >DATE OF BIRTH</h3>
          <div className="secondInputField-age-input-field" >
            <label>
              <Field
                className="secondInputField-age-input right-border"
                placeholder="DD"
                name="day"
                id="day"
                component="input"
                type="number"
                onChange={(e) => validateDay(e)}
              />
            </label>
            <label>
              <Field
                className="secondInputField-age-input"
                placeholder="MM"
                name="month"
                id="month"
                component="input"
                type="number"
                onChange={(e) => validateMonth(e)}
              />
            </label>
            <label>
              <Field
                className="secondInputField-age-input left-border"
                placeholder="YYYY"
                name="year"
                id="year"
                component="input"
                type="number"
                onChange={(e) => validateYear(e)}
              />
            </label>
          </div>
            <label>
              <Field className="title-error" name="age" component={renderError} />
            </label>
        </div>


        <div  >
          <h3 className="secondInputField-header" >GENDER</h3>
          <div className="secondInputField-sex-input">
            <label className="secondInputField-sex-button right-border">
              <Field
                name="sex"
                id="male"
                component="input"
                placeholder="MALE"
                type="button"
                value="male"
              />
            </label>
            <label className="secondInputField-sex-button" >
              <Field
                name="sex"
                id="female"
                component="input"
                placeholder="FEMALE"
                type="button"
                value="female"
              />
            </label>
            <label className="secondInputField-sex-button left-border">
              <Field
                name="sex"
                id="unspecified"
                component="input"
                type="button"
                value="unspecified"
                placeholder="UNSPECIFIED"
              />
            </label>
          </div>
          <Field className="title-error" name="sex" component={renderError} />
        </div>

        <div>
          <h3 className="secondInputField-header" >WHERE DID YOU HEAR ABOUT AS?</h3>
          <Field name="favoriteColor" component={renderReasonsSelector} />
        </div>
      </div>
      <div className="footer">
        <button type="button" className="footer-button-previous" onClick={previousPage}>
          Back
        </button>
        <button type="submit" className="footer-button-next">Next</button>
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

