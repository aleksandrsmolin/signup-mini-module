import React from 'react';
import { reduxForm } from 'redux-form';
import validate from '../validate';
import '../styles/image.png';

const FinalInputField = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form className="finalInputField" onSubmit={handleSubmit}>
      <div>
        <h3 className="header" >
          Thank you!
        </h3>
      </div>
      <div className="progress-bar" >
        <div className="final-progress-bar" />
      </div>
      <div>
        <img className="img" src={require('../styles/image.png')} alt="poops" />
      </div>
      <div>
        <button
          className="finalInputField-next"
          type="submit"
          disabled={pristine || submitting}
        >
          Go to Dashboard
        </button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(FinalInputField);

