/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Burger } from '../burger/burger';
import { MobileMenu } from '../mobile-menu/mobileMenu';
import './header.css';

export function Header() {
  const [windowSize, setSize] = useState(document.body.clientWidth);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const mobileMenuRef = React.useRef<HTMLElement>(null);
  const burgerRef = React.useRef<HTMLElement>(null);

  function useOutsideAlerter(
    ref1: React.RefObject<HTMLElement>,
    ref2: React.RefObject<HTMLElement>
  ) {
    useEffect(() => {
      function handleClickOutside(event: { target: any }) {
        if (
          ref1.current &&
          !ref1.current.contains(event.target) &&
          !ref2.current?.contains(event.target)
        ) {
          setOpenMenu(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref1, ref2]);
  }

  document.addEventListener('resize', () => setSize(document.body.clientWidth));
  useOutsideAlerter(mobileMenuRef, burgerRef);
  const handleResize = () => {
    setSize(document.body.clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [windowSize, isOpenMenu]);

  const handleBurgerClick = () => {
    setOpenMenu(!isOpenMenu);
  };

  return (
    <header className="header">
      <div className="wrap">
        <div
          className={isOpenMenu ? 'burger-wrap animation' : 'burger-wrap'}
          onClick={handleBurgerClick}
        >
          <Burger refProp={burgerRef}></Burger>
        </div>
        {isOpenMenu && <MobileMenu refProp={mobileMenuRef}></MobileMenu>}
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
