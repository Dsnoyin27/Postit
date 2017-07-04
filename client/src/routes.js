import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./App";
import Greetings from "./Greetings";
import SignupPage from "./signup/SignupPage";
import LoginPage from "./signup/LoginPage";
import chatPage from "./signup/chatPage";
import NewEventPage from "./signup/NewEventPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/chatpage" component={chatPage}/>
    <Route path="/new-event" component={NewEventPage}/>
  </Route>
);
