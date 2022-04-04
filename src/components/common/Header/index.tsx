import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { ClearUserNameAction, SetUserNameAction } from '../../../store/user/actions';
import GetUserName from '../../../store/user/selector';

import style from './Header.module.scss';

import { UserInfoReduserType } from '../../../store/user/types';
import { RegReduserType } from '../../../store/regstore/types';

type StoreStateType = {
  userInfoReducer: UserInfoReduserType;
  userRegReducer: RegReduserType;
};

const Header = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: StoreStateType) => state.userInfoReducer.name);

  const clearName = () => {
    console.log('удаление name');
    // dispatch(SetUserNameAction(''));
    dispatch(ClearUserNameAction());
  };

  return (
    <header className={style.header}>
      <h1>Header</h1>
      <ul>
        <li>
          <NavLink to="/">MAIN</NavLink>
        </li>
        {!name && (
          <>
            {' '}
            <li>
              <NavLink to="/auth">AUTH</NavLink>
            </li>
            <li>
              <NavLink to="/reg">REGISTRATION</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/users">USERS</NavLink>
        </li>
        <li>
          <NavLink to="/mypage">My Page</NavLink>
        </li>
      </ul>
      <div className={style.user_info}>
        {name ? (
          <>
            <p>{name}</p>
            <button type="button" onClick={clearName}>
              Log out
            </button>
          </>
        ) : (
          'NOT AUTH'
        )}
      </div>
    </header>
  );
};

export default Header;
