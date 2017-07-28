import axios from 'axios';
import { SET_GROUPS, ADD_GROUP } from '../constants';

// fetches created groups and renders them in a list
export function fetchGroups() {
  return dispatch => {
    axios
      .get('/api/groups')
      .then(res => res.data)
      .then(data => dispatch(setGroups(data.groups)));
  };
}

export function createGroup(data) {
  return dispatch => {
    return axios.post('/api/group', data).then(res => {
      const group = res.data;

      dispatch(addGroup(group));
    });
  };
}

// Group validations
export function isGroupExists(groupname) {
  return dispatch => {
    return axios.post('/api/group', groupname);
  };
}

// Create group response handler
function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function setGroups(groups) {
  return {
    groups,
    type: SET_GROUPS
  };
}

function addGroup(group) {
  return {
    type: ADD_GROUP,
    group
  };
}

export function saveGroup(data) {
  return dispatch => {
    return axios
      .post('/api/group', data)
      .then(handleResponse)
      .then(data => dispatch(addGroup(data.group)));
  };
}
