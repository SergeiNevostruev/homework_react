import { UserInfoReduserType, ActionType } from './types';
import { UserInfoActionType, ClearUserInfoActionType } from './actions';

const userInfoInitialState: UserInfoReduserType = {
  name: '',
};

// eslint-disable-next-line consistent-return
const userInfoReducer = (state = userInfoInitialState, action: ActionType) => {
  switch (action.type) {
    case UserInfoActionType.setUserName:
      return {
        ...state,
        name: action.payload
      };

    case ClearUserInfoActionType.setUserName:
      return {
        ...state,
        name: ''
      };

    default:
      return state;
  }
};

export default userInfoReducer;
