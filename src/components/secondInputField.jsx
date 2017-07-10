import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import renderRadio from '../renderRadio';
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
let LastActiveId = "malediv";

const ActiveStyle = "secondInputField-sex-button-on";
const DisableStyle = "secondInputField-sex-button-off";

function onClickHandler(e) {
  console.log(e.target.value);
  const id = e.target.value + "div";
  const elementToChange = document.getElementById(id);
  return (
    document.getElementById(LastActiveId).className = DisableStyle,
    elementToChange.className = ActiveStyle,
    LastActiveId = id
  );
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


        <div>
          <h3 className="secondInputField-header" >GENDER</h3>
          <div className="secondInputField-sex-input">
            <div id="malediv" className="secondInputField-sex-button-off">
              <Field
                className="hideElement"
                onClick={(e) => onClickHandler(e)}
                component="input"
                type="radio"
                name="sex"
                value="male"
                id="male"
              />
            <label htmlFor="male" className="secondInputField-sex-button-label">MALE</label>
            </div>
            <div id="femalediv" className="secondInputField-sex-button-off" >
              <Field
                className="hideElement"
                onClick={(e) => onClickHandler(e)}
                component="input"
                type="radio"
                name="sex"
                value="female"
                id="female"
              />
              <label htmlFor="female" className="secondInputField-sex-button-label">FEMALE</label>
            </div>
            <div id="unspecifieddiv" className="secondInputField-sex-button-off" >
              <Field
                className="hideElement"
                onClick={(e) => onClickHandler(e)}
                component="input"
                type="radio"
                name="sex"
                value="unspecified"
                id="unspecified"
              />
            <label htmlFor="unspecified" className="secondInputField-sex-button-label">UNSPECIFIED</label>
            </div>
          </div>
          <Field className="title-error" name="sex" component={renderError} />
        </div>

        <div>
          <h3 className="secondInputField-header" >WHERE DID YOU HEAR ABOUT AS?</h3>
          <Field name="reasonSelector" component={renderReasonsSelector} />
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

