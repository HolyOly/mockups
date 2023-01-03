import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <menu className="menu menu__left">
          <Link className="menu__link" to="/About">
            About
          </Link>
          <Link className="menu__link" to="/">
            Home
          </Link>
          <Link className="menu__link" to="/Contacts">
            Contacts
          </Link>
          <Link className="menu__link" to="/Collections">
            Collections
          </Link>
        </menu>
        <menu className="menu menu__right">
          <div>Lang</div>
          <Link className="menu__auth" to="/Auth">
            Auth
          </Link>
          <Link className="menu__auth" to="/Registration">
            Registration
          </Link>
        </menu>
      </header>
    );
  }
}

export default Header;
