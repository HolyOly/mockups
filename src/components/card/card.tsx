import React from 'react';
import './card.css';

function Card(props: ICard) {
  return (
    <div className="card">
      <img src={props.src} className="card__img" alt={props.alt} />
    </div>
  );
}

export default Card;
