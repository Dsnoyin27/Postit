import axios from 'axios';

export function getGroup(){
  return dispatch =>{
    return axios.get('/api/group');
  }
}
