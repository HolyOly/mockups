/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { RefObject } from 'react';
import { ReactComponent as ReactLogo } from './search.svg';
import './search.css';

export function SearchInput(props: {
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement> | undefined;
  refProp: RefObject<HTMLInputElement>;
}) {
  return (
    <div className="search">
      <div className="search__logo">
        <ReactLogo></ReactLogo>
      </div>
      <input
        ref={props.refProp}
        className="search__input"
        autoComplete="off"
        type="search"
        name="search"
        placeholder="search"
        id="searchInput"
        onChange={props.onChangeHandler}
      />
    </div>
  );
}
