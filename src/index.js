import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, appluMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, appluMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
);
