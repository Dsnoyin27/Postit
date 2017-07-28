import axios from 'axios';
import setAuthorizationToken from '../helpers/setAuthorizationToken';
import { SET_CURRENT_USER } from '../constants';
import jwtDecode from 'jwt-decode';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

//Handles user logout request
export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

// Handles user login request
export function login(data) {
  return dispatch => {
    return axios.post('/api/user/signin', data).then(res => {
      const token = res.data.token;

      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  };
}

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('api/user/signup', userData).then(res => {
      const token = res.data.token;
      if (token) {
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwtDecode(token)));
      }
    });
  };
}
