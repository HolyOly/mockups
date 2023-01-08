import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="wrap">
          <menu className="burger">
            <span className="burger__menu"></span>
            <span className="burger__menu"></span>
            <span className="burger__menu"></span>
          </menu>
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
            <div className="lang">Lang</div>
            <Link className="menu__auth" to="/Auth">
              Auth
            </Link>
            <Link className="menu__auth" to="/Registration">
              Registration
            </Link>
          </menu>
        </div>
      </header>
    );
  }
}

export default Header;
