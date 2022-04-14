import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ClearUserNameAction } from '../../../store/auth/actions';
import GetUserName from '../../../store/auth/selectors';
import Button from '../Button';
import style from './Header.module.scss';

const Header = () => {
  const name = useSelector(GetUserName);
  const dispatch = useDispatch();

  return (
    <header className={style.header}>
      <h1>Header</h1>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}
            to="/">
            MAIN
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}
            to="/users">
            USERS
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}
            to="/auth">
            AUTH
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}
            to="/reg">
            REG
          </NavLink>
        </li>
      </ul>
      <div className={style.user_info}>
        {name ? (
          <>
            <h2>{name}</h2>
            <Button title="LOG_OUT" onClick={() => dispatch(ClearUserNameAction())} />
          </>
        ) : (
          'NO_AUTH'
        )}
      </div>
    </header>
  );
};

export default Header;
