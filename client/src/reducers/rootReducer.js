import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import auth from './auth';
import groups from './groups';

//combines all reducers in one state object
export default combineReducers({
  groups,
  flashMessages,
  auth
});
