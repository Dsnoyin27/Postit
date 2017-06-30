import React from "react";
import classnames from "classnames";
import TextFieldGroup from "./TextFieldGroup";
import { browserHistory } from "react-router";
import { addFlashMessage } from "./flashMessages";
import Validator from "validator";
import {isUserExists} from "./signupActions";
import isEmpty from "lodash/isEmpty";

function validateInput(data) {
  let errors = {};
  if (Validator.isEmpty(data.username)) {
    errors.username = "This field is required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "This field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "This field is required";
  }
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "This field is required";
  }
  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Password must match";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
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
checkUserExists(e){
  const field = e.target.name;
  const val = e.target.value;
  if(val !== "") {
    this.props.isUserExists(val).then(res => {
      let errors = this.sate.errors;
      let invalid;
      if(res.data.user) {
        errors[field] = "There is a user with" + field;
        invalid =true;
      } else {
        errors[field] = "";
        invalid =false;
      }
      this.setState({errors, invalid});
    });
  }
}

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        res => {
          this.props.addFlashMessage({
            type: "success",
            text: "You signed up successfully, Welcome!"
          });
          this.context.router.push("/");
        },
        ({ err }) => this.setState({ errors: err.response.data, isLoading: false })
      );
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1> Join Postit!</h1>

        {errors.form &&
          <div className="alert alert-danger">
            {errors.form}
          </div>}

        <TextFieldGroup
          errors={errors.username}
          label="Username"
          onChange={this.onChange}
          value={this.state.username}
          field="username"
        />

        <TextFieldGroup
          errors={errors.email}
          label="Email"
          onChange={this.onChange}
          value={this.state.email}
          field="email"
        />

        <TextFieldGroup
          errors={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"
        />

        <TextFieldGroup
          errors={errors.confirmPassword}
          label="ConfirmPassword"
          onChange={this.onChange}
          value={this.state.confirmPassword}
          field="confirmPassword"
          type="password"
        />

        <div className="form-group">
          <button
            disabled={this.state.isLoading}
            className="btn btn-primary btn-lg"
          >
            Sign up
          </button>
        </div>
        <div>
          <h4>Or</h4>
        </div>

        <div className="form-group">
          <a
            href="https://accounts.google.com/signin/v2/sl/pwd?hl=En&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            target="blank"
          >
            <button className="btn btn-primary btn-danger btn-lg">
              <i aria-hidden="true" className="google plus icon" /> Signup with
              Google
            </button>
          </a>
        </div>
      </form>
    );
  }
}
SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SignupForm;
