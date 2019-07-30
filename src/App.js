import React from 'react';

import { useFilmsData, useFilmCharacters } from './hooks';

import MovieListContainer from './containers/movieList';
import TableContainer from './containers/table';
import OpeningCrawl from './components/openingCrawl';
import LoaderIcon from './components/loader';
import StarWarsLogo from './components/starWarsLogo';

import logoUrl from './assets/logo.png';

const App = props => {
  const [state, dispatch] = useFilmsData(props);
  useFilmCharacters(props, state, dispatch);
  const { films, isLoading, selectedFilm, filmCharacters } = state;

  return (
    <div className="App">
      {films.length < 1 && <StarWarsLogo logoUrl={logoUrl} />}
      {films.length > 0 && (
        <MovieListContainer state={state} dispatch={dispatch} />
      )}
      {!isLoading ? (
        <div className="w-75 flex flex-column items-center">
          {selectedFilm && <OpeningCrawl text={selectedFilm.opening_crawl} />}
          {filmCharacters.length > 0 && (
            <TableContainer data={filmCharacters} />
          )}
        </div>
      ) : (
        <LoaderIcon />
      )}
    </div>
  );
};

export default App;
