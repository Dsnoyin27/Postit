import {combineReducers} from 'redux';
import flashMessages from "./reducers/flashMessages";
import auth from "./auth";
import groups from "./signup/groups";

export default combineReducers({
  groups,
  flashMessages,
  auth,

});
