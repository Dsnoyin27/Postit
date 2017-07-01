import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { logout } from "./signup/loginActions";
import { isAuthenticated } from "./auth";

class NavigationBar extends React.Component {
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
      </ul>
    );
    const guestLink = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="#">Logout</a>
        </li>
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
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">
                Postit
              </Link>
            </div>

            <div className="collapse navbar-collapse">
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
