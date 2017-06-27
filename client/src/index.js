import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import routes from './routes';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider } from 'react-redux';
import {Router, browserHistory} from 'react-router';

const store = createStore(
  (state= {}) => state,
  applyMiddleware(thunk)
);
ReactDOM.render(
<Provider store={store}>
<Router history={browserHistory} routes={routes}/></Provider>, document.getElementById('root'));
registerServiceWorker();
