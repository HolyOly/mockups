import React, { useState } from 'react';
import './filter.css';
import { ReactComponent as MarkerSvgUp } from '../../assets/svg/arrow.svg';
import { ReactComponent as MarkerSvgDown } from '../../assets/svg/arrow-down.svg';

function Filter(props: IFilter) {
  const [visibility, setToggle] = useState(false);

  const clickArrowHandler = () => {
    visibility ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="filter">
      <div className="filter__header">
        <div className="filter__icon">{props.icon}</div>
        <div className="filter__name">{props.name}</div>
        <div className="filter__marker" onClick={() => clickArrowHandler()}>
          {visibility ? <MarkerSvgDown></MarkerSvgDown> : <MarkerSvgUp></MarkerSvgUp>}
        </div>
      </div>
      <div className={visibility ? 'filter__body' : 'hidden-filter'}>
        <div className="filter__params">{props.params}</div>
      </div>
    </div>
  );
}

export default Filter;
