import React, { useContext } from 'react';
import { LangContext } from '../../MockApp';
import './lang.css';

export function LangContainer() {
  const { changeLang } = useContext(LangContext);
  return (
    <div>
      <button name="ru" className="lang__btn" onClick={() => changeLang('ru')}>
        RU
      </button>
      <button name="en" className="lang__btn" onClick={() => changeLang('en')}>
        EN
      </button>
    </div>
  );
}
