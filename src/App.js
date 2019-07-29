import React, { Fragment } from 'react';

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

import StarWarsLogo from './assets/logo.png';

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
        {films.length > 0 ? (
          <Fragment>
            <div className="mb4 mt5 w-75">
              <MovieList films={films} onFilmChange={onFilmChange} />
            </div>
            {selectedFilm && (
              <div className="w-75">
                <OpeningCrawl text={selectedFilm.opening_crawl} />
                {filmCharacters.data.length > 0 && (
                  <div className="mb4 mt4 w-100">
                    <label className="white b db w-100 mb2">Gender</label>
                    <Dropdown
                      options={filmCharacters.genders}
                      className="mb3"
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
            )}
          </Fragment>
        ) : (
          <div className="w-75">
            <img src={StarWarsLogo} alt="StarWars" />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
