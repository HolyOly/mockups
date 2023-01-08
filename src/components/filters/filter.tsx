import React from 'react';
import './filter.css';
import { ReactComponent as MarkerSvg } from '../../assets/svg/arrow.svg';

function Filter(props: IFilter) {
  return (
    <div className="filter">
      <div className="filter__header">
        <div className="filter__icon">{props.icon}</div>
        <div className="filter__name">{props.name}</div>
        <div className="filter__marker">
          <MarkerSvg></MarkerSvg>
        </div>
      </div>
      <div className="filter__body">
        <div className="filter__params">{props.params}</div>
      </div>
    </div>
  );
}

export default Filter;
