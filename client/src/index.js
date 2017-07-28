import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import jwtDecode from 'jwt-decode';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducer';
import setAuthorizationToken from './helpers/setAuthorizationToken';
import { setCurrentUser } from './action-creators/authActions';

// Create store with redux
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// If the user is already logged in, make the requests from Axios authorized.
const token = localStorage.getItem('jwtToken');
if (token) {
  setAuthorizationToken(token);
  store.dispatch(setCurrentUser(jwtDecode(token)));
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
