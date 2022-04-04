import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  title: string;
  id: string;
  placeholder: string;
  value: {
    value: string;
    error: boolean;
  };
  setValue: React.Dispatch<
    React.SetStateAction<{
      value: string;
      error: boolean;
    }>
  >;
  type?: 'text' | 'password';
};

const Input = ({ title, id, placeholder, value, setValue, type = 'text' }: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, value: event.target.value }));
  };
  return (
    <label className={style.wrapper} htmlFor={id}>
      <span>{title}</span>
      <input id={id} placeholder={placeholder} value={value.value} onChange={handler} type={type} />
    </label>
  );
};

export default Input;
