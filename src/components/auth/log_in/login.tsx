import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../../hooks/useLang';
import { Button } from '../../buttons/btn';
import { Input } from '../../inputs/inputCommon';
import '../auth.css';

// see https://codepen.io/elujambio/pen/YLMVed?editors=1100

export function Login() {
  const [person, setPerson] = useState({ login: '', password: '' });
  const { getLang } = useLang();

  const loginRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // temporary solution
    const tempLogin = 'holyoly';
    const tempPass = 'lol';
    if (person.login == tempLogin && person.password == tempPass) {
      window.location.replace('Me');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  return (
    <div className="login__form">
      <form className="form-container basic-form-container">
        <div className="login__title">
          <h4>{getLang('headerLogin')}</h4>
        </div>
        <div className="login__input">
          <Input
            type={'email'}
            realType={'login'}
            labelText={'Email:'}
            placeholder={'Email'}
            icon={'email'}
            refInput={loginRef}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          ></Input>
        </div>
        <div className="login__input">
          <Input
            type={'text'}
            realType={'password'}
            labelText={'Password:'}
            placeholder={'Password'}
            icon={'password'}
            refInput={passwordRef}
            onChange={handleChange}
          ></Input>
        </div>
        <Button
          type={'submit'}
          placeholder={'Log in'}
          className={'login paddings'}
          onClick={handleSubmit}
        ></Button>
        <Link className="discrete" to="/Registration">
          Register if you don&apos;t already have an account.
        </Link>
      </form>
    </div>
  );
}
