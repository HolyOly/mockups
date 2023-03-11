import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { ICollectionItem, ICollections, makeUrl } from '../../services/getCollectios';
import { SearchInput } from '../search_el/search_el';
import './collections.css';

const initialArr: ICollectionItem[] = [];
const initialQuery = 'office';

export function Collections() {
  const [collections, setCollections] = useState(initialArr);
  const [valueInput, setInputVal] = useState(initialQuery);
  const [isError, setRespError] = useState(false);
  const [isLoading, setLoadingStatus] = useState(false);
  const searchVal = useRef<HTMLInputElement>(null);

  const getValueFromInput = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setLoadingStatus(true);
    setInputVal(target.value);
  };

  const fetchHandler = useCallback(async () => {
    fetch(makeUrl(valueInput))
      .then(async (resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          const collectionsResp: ICollections = await resp.json();
          setCollections(collectionsResp.results);
          console.log(collections);
          return collections;
        } else {
          setRespError(true);
          setLoadingStatus(false);
        }
      })
      .finally(() => {
        setLoadingStatus(false);
      });
  }, [valueInput]);

  useEffect(() => {
    fetchHandler();
  }, [valueInput]);

  return (
    <div className="collection-page">
      <h3>Collections</h3>
      <SearchInput refProp={searchVal} onChangeHandler={getValueFromInput}></SearchInput>
      <div className="collections-wrapper">
        <ul className="collection">
          <h4 className="query-title">
            {isLoading ? 'Loading...' : isError ? 'Error response' : valueInput ? valueInput : ''}
          </h4>
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
