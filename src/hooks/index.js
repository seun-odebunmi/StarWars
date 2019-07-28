import { useEffect, useReducer } from 'react';

import { getFilmsApi, getFilmCharsApi } from '../api/film';
import { getFilms, getFilmChars } from './actions';
import { initialState, reducer } from './reducers';

const useFilmsData = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getFilmsApi().then(res => {
      dispatch(getFilms(res.data.results));
    });
  }, [props]);

  return [state, dispatch];
};

const useFilmCharacters = (props, state, dispatch) => {
  useEffect(() => {
    if (state.selectedFilm) {
      Promise.all(
        state.selectedFilm.characters.map(url =>
          getFilmCharsApi(url).then(res => res.data)
        )
      ).then(chars => {
        dispatch(getFilmChars(chars));
      });
    }
  }, [state.selectedFilm, props, dispatch]);

  return state;
};

export { useFilmsData, useFilmCharacters };
