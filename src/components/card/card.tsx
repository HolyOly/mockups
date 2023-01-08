import React from 'react';
import './card.css';
import Tag from '../tag/tag';

function Card(props: ICard) {
  return (
    <div className="card">
      <img src={props.src} className="card__img" alt={props.alt} />
      <ul className="card__tag-list">
        {props.tags.map((tag, index) => {
          return <Tag tag={tag} key={index}></Tag>;
        })}
      </ul>
    </div>
  );
}

export default Card;
