import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1> Join Postit!</h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="text"
            name="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Confirm Password</label>
          <input
            value={this.state.confirmPassword}
            onChange={this.onChange}
            type="text"
            name="confirmPassword"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg" basic color="purple">
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
}
export default SignupForm;
