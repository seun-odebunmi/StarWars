import {
  GET_FILMS,
  IS_LOADING,
  SELECT_FILM,
  GET_FILM_CHARS
} from '../actions/types';

export const initialState = {
  films: [],
  isLoading: false,
  selectedFilm: null,
  filmCharacters: []
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_FILMS:
      return { ...state, films: payload, isLoading: false };
    case SELECT_FILM: {
      const selectedFilm = state.films.filter(
        ({ episode_id }) => episode_id === payload
      )[0];

      return { ...state, selectedFilm };
    }
    case GET_FILM_CHARS:
      return {
        ...state,
        filmCharacters: payload
      };
    case IS_LOADING:
      return { ...state, isLoading: payload };
    default:
      return { ...state };
  }
};
