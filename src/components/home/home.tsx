import React from 'react';
import './home.css';
import { cardsInfo } from '../../data/cards_data';
import Card from '../card/card';
import '../../assets/img/1.png';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__filter">
          <h3>Filters</h3>
        </div>
        <div className="home__main">
          {cardsInfo.map((card, index) => (
            <Card {...card} key={index}></Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
