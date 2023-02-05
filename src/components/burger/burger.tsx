import React from 'react';
import './burger.css';

export function Burger(props: { refProp: React.LegacyRef<HTMLElement> }) {
  return (
    <menu className="burger" ref={props.refProp}>
      <span className="burger__menu"></span>
      <span className="burger__menu"></span>
      <span className="burger__menu"></span>
    </menu>
  );
}
