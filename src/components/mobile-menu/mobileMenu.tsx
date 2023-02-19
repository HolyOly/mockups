import React from 'react';
import { Link } from 'react-router-dom';
import './mobileMenu.css';

export function MobileMenu(props: { refProp: React.LegacyRef<HTMLElement>; isClosing: boolean }) {
  return (
    <menu ref={props.refProp} className={`menu__mobile ${props.isClosing ? 'close' : 'open'}`}>
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
