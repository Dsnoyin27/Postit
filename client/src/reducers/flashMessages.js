
import shortid from "shortid";

export const ADD_FLASH_MESSAGE = "ADD_FLASH_MESSAGE";

export default (state = [], action = {}) => {
  switch(action.type) {
    case ADD_FLASH_MESSAGE:
    return [
      ...state,
      { id: shortid.generate(),
        type: action.message.type,
        text: action.message.text
      }
    ]
    default: return state;
  }
}
