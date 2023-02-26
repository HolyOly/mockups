import React, { useState } from 'react';
import { Button } from '../buttons/btn';
import { Input } from '../inputs/inputCommon';
import './login.css';

// see https://codepen.io/elujambio/pen/YLMVed?editors=1100

export function Login() {
  const [person, setPerson] = useState({ firstName: '', surName: '', email: '', message: '' });

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
          <h4>Log in</h4>
        </div>
        <div className="login__input">
          <Input
            type={'email'}
            id={''}
            labelText={'Email:'}
            placeholder={'Email'}
            icon={'email'}
            refInput={undefined}
            value={undefined}
            onChange={() => console.log('')}
          ></Input>
        </div>
        <div className="login__input">
          <Input
            type={'text'}
            id={''}
            labelText={'Password:'}
            placeholder={'Password'}
            icon={'password'}
            refInput={undefined}
            value={undefined}
            onChange={() => console.log('')}
          ></Input>
        </div>
        <Button
          type={'submit'}
          placeholder={'Log in'}
          className={'login paddings'}
          onClick={handleSubmit}
        ></Button>
        <a href="https://" className="discrete" rel="noreferrer">
          Register if you don&apos;t already have an account.
        </a>
      </form>
    </div>
  );
}
