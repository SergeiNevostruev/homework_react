import makeRequest from '../../network';
import { UsersActionsTypeType } from './types';

export const UsersActionsType: UsersActionsTypeType = {
  getUsers: 'GET_USERS',
};

type MainPagePropsType = {
  userData: {
    info: any;
    results: any[];
  };
};

export const GetUsersAction = (page = 0) => async (dispatch: any) => {
  const pageNumber = (page === 0) ? '' : `/?page=${page}`;
  const data: MainPagePropsType = await makeRequest({ url: `/character${pageNumber}` });
  dispatch({
    type: UsersActionsType.getUsers,
    payload: data,
  });
};
