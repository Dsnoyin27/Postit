import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import routes from "./routes";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import {Route, Router, browserHistory } from "react-router";
import rootReducer from "./rootReducer";
import setAuthorizationToken from "./signup/setAuthorizationToken";
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
setAuthorizationToken(localStorage.jwtToken);
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();


