import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import Input from '../../common/Form/Input';
import Form from '../../common/Form';
import PasswordInput from '../../common/Form/PasswordInput';
import { GetUserEmail, GetUserPassword } from '../../../store/regstore/selector';
import { SetUserRegAction } from '../../../store/regstore/actions';
import { UserInfoReduserType } from '../../../store/user/types';
import { RegReduserType } from '../../../store/regstore/types';

type StoreStateType = {
  userInfoReducer: UserInfoReduserType;
  userRegReducer: RegReduserType;
};

const RegistrationPage = () => {
  const emailstore = useSelector((state: StoreStateType) => state.userRegReducer.email);
  const passwordstore = useSelector((state: StoreStateType) => state.userRegReducer.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState({ value: '', error: false });
  const [email, setEmail] = useState({ value: '', error: false });
  const [password, setPassword] = useState({ value: '', error: false });
  const [repeatPassword, setRepeatPassword] = useState({ value: '', error: false });

  const validation = () => {
    if (!repeatPassword.value.length || !password.value.length) {
      setPassword((prev) => ({ ...prev, error: true }));
      setRepeatPassword((prev) => ({ ...prev, error: true }));
      return false;
    }
    if (repeatPassword.value !== password.value) {
      setPassword((prev) => ({ ...prev, error: true }));
      setRepeatPassword((prev) => ({ ...prev, error: true }));
      return false;
    }
    setPassword((prev) => ({ ...prev, error: false }));
    setRepeatPassword((prev) => ({ ...prev, error: false }));
    return true;
  };

  const submitHandler = () => {
    if (validation()) {
      console.log('registration');
      dispatch(SetUserRegAction(email.value, password.value));
      navigate('/auth');
      console.log('проверка', emailstore, passwordstore);
    }
  };

  return (
    <Form title="Регистрация">
      <Input value={name} setValue={setName} title="Name" id="name" placeholder="Введите имя" />
      <Input
        value={email}
        setValue={setEmail}
        title="Email"
        id="email"
        placeholder="Введите почту"
      />
      <PasswordInput
        value={password}
        setValue={setPassword}
        title="Password"
        id="password"
        placeholder="Введите пароль"
        validation={validation}
      />
      <PasswordInput
        value={repeatPassword}
        setValue={setRepeatPassword}
        title="Repeat Password"
        id="repeatPassword"
        placeholder="Повторите пароль"
        validation={validation}
      />
      <Button title="Регистрация" onClick={submitHandler} />
    </Form>
  );
};
export default RegistrationPage;
