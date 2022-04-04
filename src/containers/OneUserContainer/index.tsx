import React from 'react';
import { useParams } from 'react-router-dom';
import OneUserPage from '../../components/pages/OneUserPage';
import { data } from '../../helpers';

const OneUserContainer = () => {
  const { name } = useParams();

  const findUser = () => data.find((el) => el.name === name);

  return <OneUserPage userInfo={findUser()} />;
};

export default OneUserContainer;
