import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../../hooks/useLang';
import { Button } from '../../buttons/btn';
import { Input } from '../../inputs/inputCommon';
import '../auth.css';

// see https://codepen.io/elujambio/pen/YLMVed?editors=1100

export function Login() {
  const [person, setPerson] = useState({ firstName: '', surName: '', email: '', message: '' });
  const { getLang } = useLang();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            realType={''}
            labelText={'Email:'}
            placeholder={'Email'}
            icon={'email'}
            onChange={() => console.log('')}
          ></Input>
        </div>
        <div className="login__input">
          <Input
            type={'text'}
            realType={'password'}
            labelText={'Password:'}
            placeholder={'Password'}
            icon={'password'}
            onChange={() => console.log('')}
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
