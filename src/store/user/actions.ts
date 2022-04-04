// eslint-disable-next-line import/prefer-default-export
export const UserInfoActionType = {
  setUserName: 'SET_USER_NAME'
};

export const ClearUserInfoActionType = {
  setUserName: 'CLEAR_USER_NAME'
};

export const SetUserNameAction = (name: string) => ({
  type: UserInfoActionType.setUserName,
  payload: name
});

export const ClearUserNameAction = () => ({
  type: ClearUserInfoActionType.setUserName,
  payload: ''
});
