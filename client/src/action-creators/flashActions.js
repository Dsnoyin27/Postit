import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants';

export function addFlashMessage(message) {
  return {
    message,
    type: ADD_FLASH_MESSAGE
  };
}

export function deleteFlashMessage(id) {
  return {
    id,
    type: DELETE_FLASH_MESSAGE
  };
}
