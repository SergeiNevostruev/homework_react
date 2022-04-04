import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SetUserNameAction } from '../../../store/user/actions';
import GetUserName from '../../../store/user/selector';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
// import useAuth from '../../hook/useAuth';
// import { AuthContext } from '../../hoc/AuthProvider';
import { UserInfoReduserType } from '../../../store/user/types';
import { RegReduserType } from '../../../store/regstore/types';

type StoreStateType = {
  userInfoReducer: UserInfoReduserType;
  userRegReducer: RegReduserType;
};

const AuthPage = () => {
  const name = useSelector((state: StoreStateType) => state.userInfoReducer.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: '', error: false });
  const [password, setPassword] = useState({ value: '', error: false });
  const [hasError, setHasError] = useState(false);
  // const { user } = useContext(AuthContext);

  const submitHandler = () => {
    if (password.value.length > 10) {
      setHasError(false);
      console.log({ emailUser: email, password });
      dispatch(SetUserNameAction(email.value));
      console.log(name);
    } else {
      setHasError(true);
      console.log('Error');
    }
  };

  useEffect(() => {
    if (password.value.length > 10) {
      setHasError(false);
    } else if (password.value.length > 0) {
      setHasError(true);
    }
  }, [password]);

  useEffect(() => {
    if (name) {
      navigate('/users');
    }
  }, [name]);

  return (
    <Form title="Авторизация">
      <Input title="Email" id="email" placeholder="Введите имя" value={email} setValue={setEmail} />
      <Input
        title="Password"
        id="password"
        placeholder="Введите пароль"
        value={password}
        setValue={setPassword}
        type="password"
      />
      {hasError && (
        <div>
          <span>Пароль должден быть больше 10 символов</span>
        </div>
      )}

      <Button title="Войти" onClick={submitHandler} />
    </Form>
  );
};

export default AuthPage;
