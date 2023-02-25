import React from 'react';
import { ReactComponent as EmailSvg } from '../../assets/svg/email-login.svg';
import { ReactComponent as PassSvg } from '../../assets/svg/password-login.svg';
import './input.css';

interface IInput {
  type: string;
  id: string;
  labelText: string | undefined;
  placeholder: string | undefined;
  icon: string | undefined;
  refInput: React.LegacyRef<HTMLInputElement> | undefined;
  value: string | undefined;
  onChange: () => void | undefined;
}

export function Input({
  type,
  id,
  labelText,
  placeholder,
  icon,
  refInput,
  value,
  onChange,
}: IInput) {
  return (
    <div className="floating-label">
      <input
        placeholder={placeholder}
        type={type}
        name={type}
        id={id}
        ref={refInput}
        value={value}
        onChange={onChange}
        autoComplete="off"
      ></input>
      <label htmlFor={id}>{labelText}</label>
      <div className="icon">
        {icon == 'email' ? <EmailSvg></EmailSvg> : icon == 'password' ? <PassSvg></PassSvg> : ''}
      </div>
    </div>
  );
}
