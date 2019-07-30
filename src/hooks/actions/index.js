import { GET_FILMS, IS_LOADING, SELECT_FILM, GET_FILM_CHARS } from './types';
import { sortByAsc } from '../../helpers';

export const getFilms = data => ({
  type: GET_FILMS,
  payload: data.sort((a, b) => a.release_date.localeCompare(b.release_date))
});

export const isLoading = status => ({
  type: IS_LOADING,
  payload: status
});

export const selectFilm = id => ({ type: SELECT_FILM, payload: id });

export const getFilmChars = data => ({
  type: GET_FILM_CHARS,
  payload: data.sort((a, b) => sortByAsc(a.name, b.name))
});
