import React, { Component } from 'react';
import { ReactComponent as ReactLogo } from './search.svg';
import './search.css';

export class SearchInput extends Component {
  render() {
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
          // onInput={prop.setFunc}
        />
      </div>
    );
  }
}

export default SearchInput;
