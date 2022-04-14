import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import makeRequest from '../../../network';

type OneUserPagePropsType = {
  userInfo:
    | { id: number; name: string; image: string; gender: string; location: { name: string } }
    | undefined;
};

const OneUserPage = ({ userInfo }: OneUserPagePropsType) => {
  console.log(userInfo);
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const handler = () => {
    navigate('/users', { state: { isOpen: true } });
  };

  useEffect(() => {
    makeRequest({ url: `character/${userInfo?.id}` }).then((data) => {
      setUser(JSON.stringify(data));
    });
  }, []);
  return (
    <>
      <h1>USER PAGE</h1>
      <img src={userInfo?.image} alt="" />
      <h2>{userInfo?.name}</h2>
      <h2>{`From: ${userInfo?.location.name}`}</h2>
      <h2>{`Gender:  ${userInfo?.gender}`}</h2>
      <br />
      <Link to="/users" state={{ isOpen: true }}>
        НА СПИСОК ПОЛЬЗОВАТЕЛЕЙ
      </Link>
      <br />
      <button type="button" onClick={handler}>
        НА СПИСОК ПОЛЬЗОВАТЕЛЕЙ
      </button>
      <h3>URL response without redux:</h3>
      <span>{user}</span>
    </>
  );
};
export default OneUserPage;
