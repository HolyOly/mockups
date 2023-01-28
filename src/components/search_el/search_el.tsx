import React from 'react';
import { ReactComponent as ReactLogo } from './search.svg';
import './search.css';

export function SearchInput(props: {
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement> | undefined;
}) {
  return (
    <div className="search">
      <div className="search__logo">
        <ReactLogo></ReactLogo>
      </div>
      <input
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
