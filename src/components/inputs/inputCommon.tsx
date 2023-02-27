import React, { useState } from 'react';
import { ReactComponent as EmailSvg } from '../../assets/svg/email-login.svg';
import { ReactComponent as PassSvg } from '../../assets/svg/password-login.svg';
import { ReactComponent as EyeOpenSvg } from '../../assets/svg/eye-open.svg';
import { ReactComponent as EyeCloseSvg } from '../../assets/svg/eye-close.svg';
import { ReactComponent as NameSvg } from '../../assets/svg/user-name-svg.svg';
import { ReactComponent as LoginSvg } from '../../assets/svg/id-svg.svg';
import './input.css';

interface IInput {
  type: string;
  icon: string | undefined;
  realType?: string;
  id?: string;
  labelText?: string | undefined;
  placeholder?: string | undefined;
  refInput?: React.LegacyRef<HTMLInputElement> | undefined;
  value?: string | undefined;
  onChange?: () => void | undefined;
}

export function Input({
  type,
  realType,
  id,
  labelText,
  placeholder,
  icon,
  refInput,
  value,
  onChange,
}: IInput) {
  const [isOpen, setEyeState] = useState(false);
  const [inputType, setType] = useState(type);

  const eyeHandler = () => {
    setEyeState(!isOpen);
    isOpen ? setType('password') : setType('text');
  };

  return (
    <div className="floating-label">
      <input
        placeholder={placeholder}
        type={inputType}
        name={type}
        id={id}
        ref={refInput}
        value={value}
        onChange={onChange}
        autoComplete="off"
      ></input>
      <label htmlFor={id}>{labelText}</label>
      <div className="icon">
        {icon == 'email' ? (
          <EmailSvg></EmailSvg>
        ) : icon == 'password' ? (
          <PassSvg></PassSvg>
        ) : icon == 'username' ? (
          <NameSvg></NameSvg>
        ) : icon == 'login' ? (
          <LoginSvg></LoginSvg>
        ) : (
          ''
        )}
      </div>
      {realType == 'password' && (
        <div className="password-icon" onClick={eyeHandler}>
          {isOpen ? <EyeOpenSvg></EyeOpenSvg> : <EyeCloseSvg></EyeCloseSvg>}
        </div>
      )}
    </div>
  );
}
