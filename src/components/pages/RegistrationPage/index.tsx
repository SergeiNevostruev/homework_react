import React, { useState, useEffect } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/PasswordInput';
import Form from '../../common/Form';
import PageWrapper from '../../common/PageWrapper';

const RegistrationPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordrep, setPasswordrep] = useState('');
  const [changeInput, setChangeInput] = useState(false);
  const [stylePassword, setStylePassword] = useState({});
  const [clickEye, setclickEye] = useState(true);

  const clickerEye = () => {
    setclickEye((prev) => !prev);
  };

  const submitHandler = () => {
    console.log({ emailUser: email, password });
    if (email.length < 5 || password.length < 5 || userName.length < 2) {
      setChangeInput(true);
    } else {
      setChangeInput(false);
    }
  };

  const handleBlur = () => {
    if (password !== passwordrep) {
      setStylePassword({
        border: '3px solid red',
        transform: 'scaleY(1.4) scaleX(1.1)',
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        transition: '0.5s',
      });
    } else {
      setStylePassword({});
    }
  };

  useEffect(() => {
    if (email.length < 5 || password.length < 5 || userName.length < 2) {
      setChangeInput(true);
    } else {
      setChangeInput(false);
    }
  }, [email, password]);

  return (
    <PageWrapper>
      <Form title="Регистрация">
        {changeInput && <span style={{ color: 'red' }}>Короткий пароль, имя или емайл</span>}
        <Input
          title="Name"
          id="name"
          placeholder="Введите имя"
          value={userName}
          setValue={setUserName}
        />
        <Input
          title="Email"
          id="email"
          placeholder="Введите почту"
          value={email}
          setValue={setEmail}
        />
        <PasswordInput
          title="Password"
          id="password"
          placeholder="Введите пароль"
          value={password}
          setValue={setPassword}
          type={clickEye ? 'password' : 'text'}
          handleBlur={handleBlur}
          styleInput={stylePassword}
          click={clickEye}
          clicker={clickerEye}
        />
        <PasswordInput
          title="Repeat Password"
          id="repeatPassword"
          placeholder="Повторите пароль"
          value={passwordrep}
          setValue={setPasswordrep}
          type={clickEye ? 'password' : 'text'}
          handleBlur={handleBlur}
          styleInput={stylePassword}
          click={clickEye}
          clicker={clickerEye}
        />
        <Button title="Регистрация" onClick={submitHandler} />
      </Form>
    </PageWrapper>
  );
};

export default RegistrationPage;
