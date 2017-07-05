import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './containers/inputField';

import { Provider } from 'react-redux';
import Store from './store';

let StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <InputField />
  </Provider>,
  document.getElementById('root')
)

