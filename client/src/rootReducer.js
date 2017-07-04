import {combineReducers} from 'redux';
import flashMessages from "./reducers/flashMessages";
import auth from "./auth";
import messages from "./signup/messages";

export default combineReducers({
  messages,
  flashMessages,
  auth,

});
