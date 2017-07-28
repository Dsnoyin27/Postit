import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants';

// Processes flashmessage actions with switch statement
export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          icon: action.message.icon || 'info',
          type: action.message.type || 'success',
          text: action.message.text,
          explanation: action.message.explanation || null
        }
      ];
    case DELETE_FLASH_MESSAGE:
      const index = findIndex(state, { id: action.id });
      if (index >= 0) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }

      return state;
    default:
      return state;
  }
};
