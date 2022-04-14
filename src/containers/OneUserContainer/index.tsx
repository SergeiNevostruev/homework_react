import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OneUserPage from '../../components/pages/OneUserPage';
import { data } from '../../helpers';
import { GetUsersAction } from '../../store/users/actions';
import getUsers from '../../store/users/selectors';

const OneUserContainer = () => {
  const { name } = useParams();
  const userData = useSelector(getUsers);

  const user = userData.results.find((el) => el.id === Number(name));
  // console.log('user:', user);
  // console.log('users:', userData);

  return <OneUserPage userInfo={user} />;
};

export default OneUserContainer;
