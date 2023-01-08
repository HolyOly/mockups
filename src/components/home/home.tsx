import React from 'react';
import './home.css';
import { cardsInfo } from '../../data/cards_data';
import Card from '../card/card';
import '../../assets/img/1.png';
import SearchInput from '../search_el/search_el';
import { filtersData } from '../../data/filters_data';
import Filter from '../filters/filter';
import { ReactComponent as FilterSvg } from '../../assets/svg/filter.svg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchInput></SearchInput>
        <div className="home">
          <div className="home__wrapper">
            <div className="home__filter">
              <div className="home__filter-header">
                <FilterSvg></FilterSvg>
                <h3 className="header-text">Filters</h3>
                <p>&emsp;</p>
              </div>
              {filtersData.map((filter, index) => (
                <Filter {...filter} key={index}></Filter>
              ))}
            </div>
            <div className="home__main">
              {cardsInfo.map((card, index) => (
                <Card {...card} key={index}></Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
