import React from 'react';
import './color.css';

export function Color(props: { color: string }) {
  return <div className={'color__item'} style={{ backgroundColor: `${props.color}` }}></div>;
}
