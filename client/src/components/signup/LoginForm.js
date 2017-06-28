import React from "react";
import classnames from "classnames";
import TextFieldGroup from "./TextFieldGroup";
import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import {login} from "./loginActions";
import {connect} from "react-redux";

function validateInput(data){
  let errors = {};
  if (Validator.isNull(data.identifier)) {
    errors.identifier = "This field is required";
  }
  if (Validator.isNull(data.password)) {
    errors.password = "This field is required";
  }
  return{
    errors,
    isvalid: isEmpty(errors)
  }

}




class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: "",
      password: "",
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
      this.props.login(this.state).then(
        (res) => {this.context.router.push('/'),
        (err) => this.setState({ errors: err.data.errors, isLoading: false })
        },

      );
    }
  }

  render() {
    const{errors, identifier, password, isLoading} = this.state;
    return (
      <form onSubmit={this.onSubmit}>

        <h1> Login</h1>

        <TextFieldGroup
          field = "identifier"
          label="Username"
          value={identifier}
          error = {errors.identifier}
          onChange= {this.onChange}
        />

        <TextFieldGroup
          field = "password"
          label="Password"
          value={password}
          error = {errors.password}
          onChange= {this.onChange}
          type = "password"
        />

        <div className="form-group">
          <button
            disabled={isLoading}
            className="btn btn-primary btn-lg"
            basic
            color="purple"
          >
             Login
          </button>
        </div>
      </form>
    );
  }
}
LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null,(login)) (LoginForm);
