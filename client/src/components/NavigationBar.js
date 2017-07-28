import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../action-creators/authActions';

const MenuItemLink = ({ label, to, activeOnlyWhenExact }) =>
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match, location }) => {
      return (
        <Menu.Item
          name={label}
          as={Link}
          to={to}
          active={location.pathname === to}
        />
      );
    }}
  />;

class NavigationBar extends Component {
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

    const guestLink = (
      <Menu.Menu position="right">
        <MenuItemLink label="Login" to="/login" />
        <MenuItemLink label="Signup" to="/signup" />
      </Menu.Menu>
    );

    const userLink = (
      <Menu.Menu position="right">
        <MenuItemLink label="View Groups" to="/groups" />
        <Menu.Item name="Logout" onClick={this.logout} />
      </Menu.Menu>
    );

    return (
      <Segment inverted className="ui" style={{ margin: 0, borderRadius: 0 }}>
        <Menu inverted pointing secondary>
          <MenuItemLink label="home" activeOnlyWhenExact={true} to="/" />

          {isAuthenticated ? userLink : guestLink}
        </Menu>
      </Segment>
    );
  }
}

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps, { logout })(NavigationBar);
