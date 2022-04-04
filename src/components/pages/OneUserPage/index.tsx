import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

type OneUserPageType = {
  userInfo: { id: number; name: string; age: string } | undefined;
};

const OneUserPage = ({ userInfo }: OneUserPageType) => {
  const navigate = useNavigate();
  const handler = () => navigate('/users', { state: { isOpen: true }, replace: true });
  return (
    <>
      <h1>One User Page</h1>
      <p>{userInfo?.name}</p>
      <p>{userInfo?.age}</p>
      <Link to="/users" state={{ isOpen: true }}>
        {' '}
        На список пользователей
      </Link>
      <button type="button" onClick={handler}>
        Назад
      </button>
    </>
  );
};

export default OneUserPage;
