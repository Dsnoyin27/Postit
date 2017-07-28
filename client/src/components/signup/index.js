import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

import SignupForm from './SignupForm';

class Signup extends Component {
  render() {
    return (
      <Grid centered columns={2} style={{ marginTop: '5em' }}>
        <Grid.Column>
          <h2 className="ui teal image header">
            <img src="assets/images/logo.png" className="image" />
            <div className="content">Signup for an account</div>
          </h2>

          <SignupForm />

          <div className="ui message">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Signup;
