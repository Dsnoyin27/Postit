import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./App";
import Greetings from "./Greetings";
import SignupPage from "./signup/SignupPage";
import LoginPage from "./signup/LoginPage";
import GroupsPage from "./signup/GroupsPage";
import chatPage from "./signup/chatPage";
import GroupForm from "./signup/GroupForm";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/groups" component={GroupsPage}/>
    <Route path="/groups/new" component={GroupForm}/>
    <Route path="/chatPage" component={chatPage}/>
  </Route>
);
