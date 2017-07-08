import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FirstInputField from '../components/firstInputField';
import SecondInputField from '../components/secondInputField';
import FinalInputField from '../components/finalInputField';


class InputField extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <FirstInputField onSubmit={this.nextPage} />}
        {page === 2 &&
          <SecondInputField
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <FinalInputField
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    );
  }
}

InputField.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default InputField;
