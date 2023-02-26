import React, { useEffect, useReducer, useRef } from 'react';
import './home.css';
import { cardsInfo } from '../../data/cards_data';
import Card from '../card/card';
import { filtersData } from '../../data/filters_data';
import Filter from '../filters/filter';
import { ReactComponent as FilterSvg } from '../../assets/svg/filter.svg';

const defaultBoxText = '';
const defaultUserQuery: string[] = [];

const temoraryBufferForQuery: string[] = [];

enum ReducerActionKind {
  TYPING = 'TYPING',
  NO_TYPING = 'NO_TYPING',
  GET_QUERY = 'GET_QUERY',
}

interface IDefaultState {
  filtersData: IFilter[];
  cardsInfo: ICard[];
  boxUnderSearchbar: string;
  userQueries: string[];
}

const defaultState: IDefaultState = {
  filtersData,
  cardsInfo,
  boxUnderSearchbar: defaultBoxText,
  userQueries: defaultUserQuery,
};

interface IReducerAction {
  type: ReducerActionKind;
}

//should always return something
const reducer = (state: IDefaultState, action: IReducerAction): IDefaultState => {
  const { type } = action;
  switch (type) {
    case ReducerActionKind.TYPING:
      return {
        ...state,
        boxUnderSearchbar: 'typing...',
      };
    case ReducerActionKind.NO_TYPING:
      return {
        ...state,
        boxUnderSearchbar: '',
      };
    case ReducerActionKind.GET_QUERY:
      return {
        ...state,
        userQueries: temoraryBufferForQuery,
      };
    default:
      return state;
  }
};

export function Home() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const searchVal = useRef<HTMLInputElement>(null);

  const hendlerPressEnter = () => {
    if (searchVal.current && searchVal.current.value !== '') {
      temoraryBufferForQuery.push(searchVal.current.value);
      dispatch({ type: ReducerActionKind.GET_QUERY });
    }
  };

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        hendlerPressEnter();
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div>
      <div className="home">
        <div className="home__wrapper">
          <div className="home__filter">
            <div className="home__filter-header">
              <FilterSvg></FilterSvg>
              <h3 className="header-text">Filters</h3>
              <p>&emsp;</p>
            </div>
            {state.filtersData.map((filter: IFilter, index: number) => (
              <Filter {...filter} key={index}></Filter>
            ))}
          </div>
          <div className="home__main">
            {state.cardsInfo.map((card: ICard, index: number) => (
              <Card {...card} key={index}></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
