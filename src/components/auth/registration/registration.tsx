import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../buttons/btn';
import { Input } from '../../inputs/inputCommon';
import '../auth.css';

export function Registration() {
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
          <h4>Registration</h4>
        </div>
        <div className="login__input">
          <Input
            type={'text'}
            realType={'text'}
            labelText={'Name:'}
            placeholder={'First and last name'}
            icon={'username'}
            onChange={() => console.log('')}
          ></Input>
        </div>
        <div className="login__input">
          <Input
            type={'email'}
            realType={''}
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
            realType={'login'}
            labelText={'Login:'}
            placeholder={'Login'}
            icon={'login'}
            onChange={() => console.log('')}
          ></Input>
        </div>
        <div className="login__input">
          <Input
            type={'text'}
            realType={'password'}
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
        <Link className="discrete" to="/Login">
          Already have an account? Log in
        </Link>
      </form>
    </div>
  );
}
