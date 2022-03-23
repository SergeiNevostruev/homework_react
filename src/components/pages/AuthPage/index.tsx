import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [changeInput, setChangeInput] = useState(false);
  const submitHandler = () => {
    console.log({ emailUser: email, password });
    if (email.length < 5 || password.length < 5) {
      setChangeInput(true);
    } else {
      setChangeInput(false);
    }
  };

  useEffect(() => {
    if (email.length < 5 || password.length < 5) {
      setChangeInput(true);
    } else {
      setChangeInput(false);
    }
  }, [email, password]);

  return (
    <PageWrapper>
      <Form title="Авторизация">
        <Input
          title="Email"
          id="email"
          placeholder="Введите почту"
          value={email}
          setValue={setEmail}
        />
        {changeInput && <h2>Короткий пароль или емайл</h2>}
        <Input
          title="Password"
          id="password"
          placeholder="Введите пароль"
          value={password}
          setValue={setPassword}
          type="password"
        />
        <Button title="Войти" onClick={submitHandler} />
      </Form>
    </PageWrapper>
  );
};

export default AuthPage;
