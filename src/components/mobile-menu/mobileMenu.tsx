import React from 'react';
import { Link } from 'react-router-dom';
import './mobileMenu.css';

export function MobileMenu(props: { isOpen: boolean }) {
  return (
    <menu className="menu__mobile">
      <Link className="menu__mobile-item" to="/About">
        About
      </Link>
      <Link className="menu__mobile-item" to="/">
        Home
      </Link>
      <Link className="menu__mobile-item" to="/Contacts">
        Contacts
      </Link>
      <Link className="menu__mobile-item" to="/Collections">
        Collections
      </Link>
      <div className="lang">Lang</div>
    </menu>
  );
}
