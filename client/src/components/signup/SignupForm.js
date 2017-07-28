import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import Validator from 'validator';

import { userSignupRequest } from '../../action-creators/authActions';
import { addFlashMessage } from '../../action-creators/flashActions';

// Client side validations for new users
function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = true;
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = true;
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = true;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = true;
  }

  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = true;
  }

  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = true;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
      isLoading: false
    };

    // Binds this to onChange and onSubmit for proper context
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  // Event handler
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        res => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Welcome to PostIt App!',
            explanation: 'Your registration was successful'
          });
          this.setState({
            success: true,
            isLoading: false
          });
        },
        err => {
          this.props.addFlashMessage({
            type: 'error',
            text: err.response.data.message,
            explanation: 'Please correct the errors in your form'
          });
          this.setState({ isLoading: false });
        }
      );
    }
  }

  render() {
    const {
      success,
      errors,
      username,
      email,
      password,
      confirmPassword,
      isLoading
    } = this.state;

    if (success) {
      return <Redirect to="/" />;
    }

    return (
      <Form loading={isLoading} onSubmit={this.onSubmit}>
        <div className="ui stacked segment">
          <Form.Input
            icon="user"
            iconPosition="left"
            placeholder="Username"
            value={username}
            onChange={this.onChange}
            name="username"
            error={errors && errors.username}
          />
          <Form.Input
            icon="at"
            iconPosition="left"
            placeholder="Email Address"
            value={email}
            onChange={this.onChange}
            name="email"
            error={errors && errors.email}
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            value={password}
            onChange={this.onChange}
            name="password"
            error={errors && errors.password}
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={this.onChange}
            name="confirmPassword"
            error={errors && errors.confirmPassword}
          />
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    );
  }
}

export default connect(null, { userSignupRequest, addFlashMessage })(
  SignupForm
);
