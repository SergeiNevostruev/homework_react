// import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// type MyPageType = {
//   userInfo: { id: number; name: string; age: string } | undefined;
// };

type LocationState = {
  from?: {
    pathname?: string;
  };
};

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const { from } = (location.state as LocationState) || false;
  const fromPage = from?.pathname || '/';
  // const handler = () => navigate('/users', { state: { isOpen: true }, replace: true });
  return (
    <>
      <h1>Моя страница</h1>
      <p>Мое имя</p>
      <p>Обо мне</p>
      {fromPage}
      {/* <p>{userInfo?.name}</p>
      <p>{userInfo?.age}</p> */}
      <Link to="/users" state={{ isOpen: true }}>
        {' '}
        На список пользователей
      </Link>
      {/* <button type="button" onClick={handler}>
        Назад
      </button> */}
    </>
  );
};

export default MyPage;
