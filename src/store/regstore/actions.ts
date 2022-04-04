// eslint-disable-next-line import/prefer-default-export
export const RegActionType = {
  setRegName: 'SET_REG_USER'
};

export const ClearRegActionType = {
  setRegName: 'CLEAR_REG_USER'
};

export const SetUserRegAction = (email: string, password: string) => ({
  type: RegActionType.setRegName,
  payload1: email,
  payload2: password,
});

export const ClearRegAction = () => ({
  type: ClearRegActionType.setRegName,
  payload1: '',
  payload2: '',
});
