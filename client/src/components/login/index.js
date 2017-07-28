import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm';

class Signup extends Component {
  render() {
    return (
      <Grid centered columns={2} style={{ marginTop: '5em' }}>
        <Grid.Column>
          <h2 className="ui teal image header">
            <img src="assets/images/logo.png" className="image" />
            <div className="content">Login to your account</div>
          </h2>

          <LoginForm />

          <div className="ui message">
            Don't have an account? <Link to="/signup">Signup</Link>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Signup;
