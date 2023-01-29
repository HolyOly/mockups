import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Burger } from '../burger/burger';
import { MobileMenu } from '../mobile-menu/mobileMenu';
import './header.css';

export function Header() {
  const [windowSize, setSize] = useState(document.body.clientWidth);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const inputRef = React.useRef<HTMLElement>(null);

  document.addEventListener('resize', () => setSize(document.body.clientWidth));

  const handleResize = () => {
    setSize(document.body.clientWidth);
  };

  useOutsideAlerter(inputRef);

  function useOutsideAlerter(ref: React.RefObject<HTMLElement>) {
    useEffect(() => {
      function handleClickOutside({ target }: MouseEvent) {
        if (ref.current && !ref.current?.contains(target as Node)) {
          setMobileMenu(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [windowSize, isMobileMenu]);

  return (
    <header className="header">
      <div className="wrap">
        <Burger
          onClick={() => (isMobileMenu ? setMobileMenu(false) : setMobileMenu(true))}
          open={isMobileMenu}
        ></Burger>
        {isMobileMenu && <MobileMenu refProp={inputRef}></MobileMenu>}
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
