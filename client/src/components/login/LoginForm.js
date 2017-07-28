import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import Validator from 'validator';

import { login } from '../../action-creators/authActions';
import { addFlashMessage } from '../../action-creators/flashActions';

function validateInput(data) {
  let errors = {};
  if (Validator.isEmpty(data.username)) {
    errors.username = true;
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = true;
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      success: false,
      isLoading: false
    };

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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        res => {
          this.setState({
            success: true,
            isLoading: false
          });
        },
        err => {
          this.props.addFlashMessage({
            type: 'error',
            text: err.response.data.errors.form,
            explanation: 'Check your username and or password'
          });
          this.setState({
            isLoading: false
          });
        }
      );
    }
  }

  render() {
    const { success, errors, username, password, isLoading } = this.state;

    if (success) {
      return <Redirect to="/" />;
    }

    return (
      <Form onSubmit={this.onSubmit} loading={isLoading}>
        <div className="ui stacked segment">
          <Form.Input
            icon="user"
            iconPosition="left"
            placeholder="Username or Email"
            value={username}
            name="username"
            onChange={this.onChange}
            error={errors && errors.username}
          />

          <Form.Input
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            value={password}
            name="password"
            onChange={this.onChange}
            error={errors && errors.password}
          />

          <Button type="submit">Submit</Button>
        </div>
      </Form>
    );
  }
}

export default connect(null, { login, addFlashMessage })(LoginForm);
