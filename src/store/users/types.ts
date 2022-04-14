export type UsersActionsTypeType = {
  getUsers: 'GET_USERS';
};

export type UserReducerType = {
  data: {
    info: any;
    results: any[];
  };
};

export type GetUsersActionType = {
  type: UsersActionsTypeType['getUsers'];
  payload: any[];
};

export type ActionType = GetUsersActionType;
