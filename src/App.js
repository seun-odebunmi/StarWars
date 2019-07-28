import React from 'react';

import {
  selectFilm,
  sortFilmChars,
  filterFilmChars
} from './hooks/actions/index';
import { useFilmsData, useFilmCharacters } from './hooks';
import { convertToFt } from './helpers';

import MovieList from './components/movieList';
import OpeningCrawl from './components/openingCrawl';
import Dropdown from './components/dropdown';
import Table from './components/table';

import './index.scss';

const App = props => {
  const [state, dispatch] = useFilmsData(props);
  useFilmCharacters(props, state, dispatch);
  const { films, selectedFilm, filmCharacters } = state;

  const columns = ['name', 'gender', 'height'];
  const footerMsg = [
    `Total Number of Characters: ${filmCharacters.total}`,
    `Sum of Character Heights: ${filmCharacters.heightSum} cm (${convertToFt(
      filmCharacters.heightSum
    )})`
  ];

  const onFilmChange = id => dispatch(selectFilm(id));

  const onGenderChange = val => dispatch(filterFilmChars(val));

  const sortHeader = name => dispatch(sortFilmChars(name));

  return (
    <div className="w-100 min-vh-100 flex justify-center">
      <div className="App fl w-75 flex flex-column items-center">
        <div className="mb4 mt5 w-75">
          <MovieList films={films} onFilmChange={onFilmChange} />
        </div>
        {selectedFilm && <OpeningCrawl text={selectedFilm.opening_crawl} />}
        {filmCharacters.data.length > 0 && (
          <div className="mb4 mt4 w-75">
            <Dropdown
              options={filmCharacters.genders}
              onChange={e => onGenderChange(e.target.value)}
            />
            <Table
              rows={filmCharacters.data}
              sortHeader={sortHeader}
              columns={columns}
              footerMsg={footerMsg}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
