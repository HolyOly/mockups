import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../hooks/useLang';
import { useOutsideAlerter } from '../../hooks/useOutsideClick';
import { LayoutContext } from '../../MockApp';
import { Burger } from '../burger/burger';
import { LangContainer } from '../lang/langComponent';
import { MobileMenu } from '../mobile-menu/mobileMenu';
import './header.css';

export function Header() {
  const [windowSize, setSize] = useState(document.body.clientWidth);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const { hideMainSection } = useContext(LayoutContext);

  const mobileMenuRef = React.useRef<HTMLElement>(null);
  const burgerRef = React.useRef<HTMLElement>(null);

  const { getLang } = useLang();

  document.addEventListener('resize', () => setSize(document.body.clientWidth));
  useOutsideAlerter(mobileMenuRef, burgerRef, setOpenMenu, hideMainSection);
  const handleResize = () => {
    setSize(document.body.clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [windowSize, isOpenMenu]);

  const handleBurgerClick = () => {
    setOpenMenu(!isOpenMenu);
    hideMainSection(isOpenMenu);
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
        <MobileMenu isClosing={!isOpenMenu} refProp={mobileMenuRef}></MobileMenu>
        <menu className="menu menu__left">
          <Link className="menu__link" to="/About">
            {getLang('headerAbout')}
          </Link>
          <Link className="menu__link" to="/">
            {getLang('headerHome')}
          </Link>
          <Link className="menu__link" to="/Contacts">
            {getLang('headerContacts')}
          </Link>
          <Link className="menu__link" to="/Collections">
            {getLang('headerCollections')}
          </Link>
        </menu>
        <menu className="menu menu__right">
          <LangContainer isMobile={false}></LangContainer>
          <Link className="menu__auth" to="/Login">
            Log in
          </Link>
        </menu>
      </div>
    </header>
  );
}
