import React from 'react';
import './burger.css';

export function Burger(props: { onClick: () => void }) {
  return (
    <menu className="burger">
      <span className="burger__menu"></span>
      <span className="burger__menu"></span>
      <span className="burger__menu"></span>
    </menu>
  );
}
