import React, { ChangeEvent, useEffect, useState } from 'react';
import { ICollectionItem, ICollections, makeUrl } from '../../services/getCollectios';
import { SearchInput } from '../search_el/search_el';
import './collections.css';

const initialArr: ICollectionItem[] = [];
const initialQuery = 'office';

export function Collections() {
  const [collections, setCollections] = useState(initialArr);
  const [valueInput, setInputVal] = useState(initialQuery);

  const getCollections = async () => {
    const response = await fetch(makeUrl(valueInput));
    const collectionsResp: ICollections = await response.json();
    // console.log(collectionsResp);
    setCollections(collectionsResp.results);
  };

  //TODO Learn useCallback hook

  const getValueFromInput = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputVal(target.value);
    getCollections();
  };

  useEffect(() => {
    getCollections();
  }, [getCollections]);

  return (
    <div className="collection-page">
      <h3>Collections</h3>
      <SearchInput onChangeHandler={getValueFromInput}></SearchInput>
      <div className="collections-wrapper">
        <ul className="collection">
          <h4 className="query-title">{valueInput}</h4>
          <li className="collection-grid">
            {collections.map((collection: ICollectionItem, index: number) => {
              return (
                <div className="collection-grid__item" key={index}>
                  <img className="img" src={collection.cover_photo.urls.small} alt="" />
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
}
