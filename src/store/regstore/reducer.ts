import { RegReduserType, ActionType } from './types';
import { RegActionType, ClearRegActionType } from './actions';

const userRegInitialState: RegReduserType = {
  email: '',
  password: '',
};

// eslint-disable-next-line consistent-return
const userRegReducer = (state = userRegInitialState, action: ActionType) => {
  switch (action.type) {
    case RegActionType.setRegName:
      return {
        ...state,
        email: action.payload1,
        password: action.payload2
      };

    case ClearRegActionType.setRegName:
      return {
        ...state,
        email: '',
        password: '',
      };

    default:
      return state;
  }
};

export default userRegReducer;
