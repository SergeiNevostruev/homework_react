import React, { ChangeEvent, useState } from 'react';
import EyeIcon from './EyeIcon';
import style from './PasswordInput.module.scss';

type PasswordInputPropsType = {
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
  validation: () => boolean;
};

const PasswordInput = ({
  title,
  id,
  placeholder,
  value,
  setValue,
  validation,
}: PasswordInputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, value: event.target.value }));
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <label className={style.wrapper} htmlFor={id}>
      <span>{title}</span>
      <input
        className={`${value.error ? style.error : ''}`}
        id={id}
        placeholder={placeholder}
        value={value.value}
        onChange={handler}
        type={passwordVisible ? 'text' : 'password'}
        onBlur={validation}
      />
      <button type="button" onClick={() => setPasswordVisible((prev) => !prev)}>
        <EyeIcon visible={passwordVisible} />
      </button>
    </label>
  );
};

export default PasswordInput;
