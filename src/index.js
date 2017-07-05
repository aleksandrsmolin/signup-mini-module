import React from 'react';
import ReactDOM from 'react-dom';

import Body from './containers/body';


import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <Body />
  </Provider>,
  document.getElementById('root')
)

