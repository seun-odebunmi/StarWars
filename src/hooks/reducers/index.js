import {
  GET_FILMS,
  SELECT_FILM,
  GET_FILM_CHARS,
  SORT_FILM_CHARS,
  FILTER_FILM_CHARS_BY_GENDER
} from '../actions/types';

export const initialState = {
  films: [],
  selectedFilm: null,
  filmCharacters: {
    initData: [],
    data: [],
    genders: [],
    sortBy: 'name',
    ascOrder: true,
    total: 0,
    heightSum: 0
  }
};

export const reducer = (state, { type, payload }) => {
  // console.log(state, action);
  switch (type) {
    case GET_FILMS:
      return { ...state, films: payload };
    case SELECT_FILM: {
      const selectedFilm = state.films.filter(
        ({ episode_id }) => episode_id === payload
      )[0];

      return { ...state, selectedFilm };
    }
    case GET_FILM_CHARS:
      return {
        ...state,
        filmCharacters: {
          ...state.filmCharacters,
          ...payload,
          initData: payload.data
        }
      };
    case SORT_FILM_CHARS: {
      const { sortBy, ascOrder, data } = state.filmCharacters;
      const newAscOrder = sortBy === payload ? !ascOrder : true;
      const sortedDate = data.sort((a, b) =>
        newAscOrder
          ? a[payload].localeCompare(b[payload])
          : b[payload].localeCompare(a[payload])
      );

      return {
        ...state,
        filmCharacters: {
          ...state.filmCharacters,
          data: sortedDate,
          sortBy: payload,
          ascOrder: newAscOrder
        }
      };
    }
    case FILTER_FILM_CHARS_BY_GENDER: {
      const { initData } = state.filmCharacters;
      const filteredData =
        payload !== ''
          ? initData.filter(({ gender }) => gender === payload)
          : initData;

      return {
        ...state,
        filmCharacters: {
          ...state.filmCharacters,
          data: filteredData
        }
      };
    }
    default:
      throw new Error();
  }
};
