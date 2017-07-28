import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Creates a Route component similar to Route but authentication aware.
 * This component only allows navigation to the specified route if the user is logged in.
 * Based on https://reacttraining.com/react-router/web/example/auth-workflow
 */
const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
  const { isAuthenticated } = auth;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated
          ? <Component {...props} />
          : <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />}
    />
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
