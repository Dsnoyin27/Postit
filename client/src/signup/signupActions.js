import axios from 'axios';


export function userSignupRequest(userData){
  return dispatch => {
    return axios.post('api/user/signup', userData);
  }
}
export function isUserExists(username) {
  return dispatch => {
    return axios.post('/api/user/signup' , username);
  }
}
