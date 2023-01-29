import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Burger } from '../burger/burger';
import { MobileMenu } from '../mobile-menu/mobileMenu';
import './header.css';

export function Header() {
  const [windowSize, setSize] = useState(document.body.clientWidth);
  const [isMobile, setMobileMode] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);

  document.addEventListener('resize', () => setSize(document.body.clientWidth));

  const handleResize = () => {
    setSize(document.body.clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    if (windowSize < 720) {
      setMobileMode(true);
    } else {
      setMobileMode(false);
    }
  }, [windowSize]);

  return (
    <header className="header">
      <div className="wrap">
        <Burger onClick={() => setMobileMenu(true)}></Burger>
        <MobileMenu isOpen={false}></MobileMenu>
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
