import React from "react";
import classnames from "classnames";

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

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props
      .userSignupRequest(this.state)
      .then(() => {}, ({ data }) => this.setState({ errors: data, isLoading: false }));
  }

  render() {
    const errors = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1> Join Postit!</h1>
        <div
          className={classnames("form-group", { "has-error": errors.username })}
        >
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
          />
          {errors.username &&
            <span className="help-block">{errors.username}</span>}
        </div>
        <div className={classnames("form-group", { "has-error": errors.email })}>
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
          />

          {errors.email &&
            <span className="help-block">{errors.email}</span>}
        </div>
        <div className={classnames("form-group", { "has-error": errors.password })}>
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="text"
            name="password"
            className="form-control"
          />
          {errors.password &&
            <span className="help-block">{errors.password}</span>}
        </div>
        <div className={classnames("form-group", { "has-error": errors.confirmPassword })}>
          <label className="control-label">Confirm Password</label>
          <input
            value={this.state.confirmPassword}
            onChange={this.onChange}
            type="text"
            name="confirmPassword"
            className="form-control"
          />
          {errors.confirmPassword &&
            <span className="help-block">{errors.confirmPassword}</span>}
        </div>
        <div className="form-group">
          <button disabled ={this.state.isLoading } className="btn btn-primary btn-lg" basic color="purple">
            Sign up
          </button>
        </div>
        <div><h4>Or</h4></div>
        <div>
          <button className="btn btn-primary btn-danger btn-lg">
            <i aria-hidden="true" class="google plus icon" /> Signup with Google
          </button>
        </div>
      </form>
    );
  }
}
SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};
export default SignupForm;
