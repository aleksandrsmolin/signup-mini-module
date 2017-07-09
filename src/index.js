import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import showResults from './showResults';
import InputField from './containers/inputField';

import './styles/style.css';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <div className="body">
      <InputField onSubmit={showResults} />
    </div>
  </Provider>,
  rootEl,
);

