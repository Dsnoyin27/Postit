import React from "react";
import classnames from "classnames";
import TextFieldGroup from "./TextFieldGroup";
import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import { login } from "./loginActions";
import { connect } from "react-redux";

function validateInput(data) {
  let errors = {};
  if (Validator.isEmpty(data.username)) {
    errors.username = "This field is required";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "This field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

class NewEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props
        .login(this.state)
        .then(
          res => this.context.router.push("/"),
          err =>
            this.setState({
              errors: err.response.data.errors,
              isLoading: false
            })
        );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, username, password, isLoading } = this.state;

    return (
      <div className="container">
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        {errors.form &&
          <div className="alert alert-danger">
            {errors.form}
          </div>}

        <TextFieldGroup
          field="username"
          label="Username"
          value={username}
          errors={errors.username}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />

        <div className="form-group">
          <button className="btn btn-primary btn-lg" disabled={isLoading}>
            Login
          </button>
        </div>
      </form>
      </div>
    );
  }
}

NewEventForm.propTypes = {
  login: React.PropTypes.func.isRequired
};

NewEventForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(null, { login })(NewEventForm);
