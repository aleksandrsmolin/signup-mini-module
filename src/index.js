import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import showResults from './showResults';
import InputField from './containers/inputField';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <InputField onSubmit={showResults} />
    </div>
  </Provider>,
  rootEl,
);

