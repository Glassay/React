// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import rootReducer from './reducers';

// const store = createStore(rootReducer)

// render(<App />, document.getElementById('root'));
// registerServiceWorker();
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
