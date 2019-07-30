import React from 'react';

import { selectFilm } from '../../hooks/actions';
import MovieList from '../../components/movieList';

const MovieListContainer = ({ state, dispatch }) => {
  const { films } = state;
  const options = films.map(({ title, episode_id }) => ({
    name: title,
    value: episode_id
  }));

  const onFilmChange = id => dispatch(selectFilm(id));

  return <MovieList list={options} onFilmChange={onFilmChange} />;
};

export default MovieListContainer;
