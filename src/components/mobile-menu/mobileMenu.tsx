import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../hooks/useLang';
import { LangContainer } from '../lang/langComponent';
import './mobileMenu.css';

export function MobileMenu(props: { refProp: React.LegacyRef<HTMLElement>; isClosing: boolean }) {
  const { getLang } = useLang();

  return (
    <menu ref={props.refProp} className={`menu__mobile ${props.isClosing ? '' : 'open'}`}>
      <Link className="menu__mobile-item" to="/About">
        {getLang('headerAbout')}
      </Link>
      <Link className="menu__mobile-item" to="/">
        {getLang('headerHome')}
      </Link>
      <Link className="menu__mobile-item" to="/Contacts">
        {getLang('headerContacts')}
      </Link>
      <Link className="menu__mobile-item" to="/Collections">
        {getLang('headerCollections')}
      </Link>
      <div className="menu__mobile-item">
        <LangContainer isMobile={true}></LangContainer>
      </div>
    </menu>
  );
}
