import React from 'react';
import './burger.css';

export function Burger(props: { onClick: () => void; open: boolean }) {
  return (
    <menu className={props.open ? 'burger animation' : 'burger'} onClick={props.onClick}>
      <span className="burger__menu"></span>
      <span className="burger__menu"></span>
      <span className="burger__menu"></span>
    </menu>
  );
}
