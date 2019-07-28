import {
  GET_FILMS,
  SELECT_FILM,
  GET_FILM_CHARS,
  SORT_FILM_CHARS,
  FILTER_FILM_CHARS_BY_GENDER
} from './types';

export const getFilms = data => ({
  type: GET_FILMS,
  payload: data.sort((a, b) => a.release_date.localeCompare(b.release_date))
});

export const selectFilm = id => ({ type: SELECT_FILM, payload: id });

export const getFilmChars = data => ({
  type: GET_FILM_CHARS,
  payload: {
    data: data.sort((a, b) => a.name.localeCompare(b.name)),
    genders: data
      .reduce(
        (accum, { gender }) =>
          accum.indexOf(gender) > -1 ? accum : [...accum, gender],
        []
      )
      .map(gender => ({ name: gender, value: gender })),
    total: data.length,
    heightSum: data.reduce(
      (accum, { height }) =>
        isNaN(Number(height)) ? accum : Number(height) + accum,
      0
    )
  }
});

export const sortFilmChars = header => ({
  type: SORT_FILM_CHARS,
  payload: header
});

export const filterFilmChars = gender => ({
  type: FILTER_FILM_CHARS_BY_GENDER,
  payload: gender
});
