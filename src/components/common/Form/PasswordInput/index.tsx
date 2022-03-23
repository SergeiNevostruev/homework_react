import React, { ChangeEvent, FocusEventHandler } from 'react';
import Eye from './Eye';
import style from './Input.module.scss';

type InputPropsType = {
  title: string;
  id: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type?: 'text' | 'password';
  handleBlur: FocusEventHandler<HTMLInputElement>;
  styleInput: React.HTMLAttributes<HTMLInputElement>;
  click: boolean;
  clicker: React.MouseEventHandler;
};

const PasswordInput = ({
  title,
  id,
  placeholder,
  value,
  setValue,
  type = 'text',
  handleBlur,
  styleInput,
  click,
  clicker,
}: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <label className={style.wrapper} htmlFor={id}>
      <span>{title}</span>
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handler}
        type={type}
        onBlur={handleBlur}
        style={styleInput}
      />
      <Eye click={click} clicker={clicker} />
    </label>
  );
};

export default PasswordInput;
