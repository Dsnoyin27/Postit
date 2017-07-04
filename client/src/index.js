import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import routes from "./routes";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import rootReducer from "./rootReducer";
import setAuthorizationToken from "./signup/setAuthorizationToken";
import {composeWithDevTools} from "redux-devtools-extension";
import "./index.css";
import {BrowserRouter} from "react-router-dom";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);
setAuthorizationToken(localStorage.jwtToken);
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();


