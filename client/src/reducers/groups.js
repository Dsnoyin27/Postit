import { SET_GROUPS, ADD_GROUP } from '../constants';

export default function groups(state = [], action = {}) {
  switch (action.type) {
    case ADD_GROUP:
      return [
        ...state,
        {
          id: action.group.id,
          groupname: action.group.groupname,
          createdAt: Date.now(),
          isOwner: true
        }
      ];
    case SET_GROUPS:
      return action.groups;
    default:
      return state;
  }
}
