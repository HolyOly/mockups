import React, { useContext } from 'react';
import { LangContext } from '../../MockApp';
import { ReactComponent as RuFlag } from '../../assets/svg/flag-russia20.svg';
import { ReactComponent as EnFlag } from '../../assets/svg/flag-united-kingdom20.svg';
import { ReactComponent as RuFlagMobile } from '../../assets/svg/flag-russia40.svg';
import { ReactComponent as EnFlagMobile } from '../../assets/svg/flag-united-kingdom40.svg';
import './lang.css';

export function LangContainer(props: { isMobile: boolean }) {
  const { changeLang } = useContext(LangContext);
  return (
    <div className="lang-container">
      <button name="ru" className="lang__btn" onClick={() => changeLang('ru')}>
        {props.isMobile ? <RuFlagMobile></RuFlagMobile> : <RuFlag></RuFlag>}
      </button>
      <button name="en" className="lang__btn" onClick={() => changeLang('en')}>
        {props.isMobile ? <EnFlagMobile></EnFlagMobile> : <EnFlag></EnFlag>}
      </button>
    </div>
  );
}
