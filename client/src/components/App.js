import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeComponent from './Home';
import LoginComponent from './login';
import SignupComponent from './signup';
import Groups from './groups';
import NavigationBar from './NavigationBar';
import FlashMessageList from './flashMessages/FlashMessageList';
import ProtectedRoute from './helpers/ProtectedRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <FlashMessageList />
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/signup" component={SignupComponent} />

          <ProtectedRoute path="/groups" component={Groups} />
        </Switch>
      </div>
    );
  }
}

export default App;
