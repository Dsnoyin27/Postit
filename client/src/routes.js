import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./App";
import Greetings from "./NavigationBar";
import SignupPage from "./signup/SignupPage";
import LoginPage from "./signup/LoginPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="Signup" component={SignupPage} />
    <Route path="Login" component={LoginPage} />
  </Route>
);
