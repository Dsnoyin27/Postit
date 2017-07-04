import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { logout } from "./signup/loginActions";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLink = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="#" onClick={this.logout.bind(this)}>
            Logout
          </a>
        </li>
        <li>
          <Link to="/chatPage">chatPage</Link>
        </li>
      </ul>
    );
    const guestLink = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );

    return (
      <header>
        <nav className="nav-wrapper">
          <div className="container-fluid">
            <Link to="/" className="brand-logo">
              Postit
            </Link>

            <div className="right hide-on-med-and-down">
              {isAuthenticated ? userLink : guestLink}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps, { logout })(NavigationBar);
