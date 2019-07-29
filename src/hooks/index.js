import { useEffect, useReducer } from 'react';

import { getFilmsApi, getFilmCharsApi } from '../api/film';
import { handleError } from '../api/';
import {
  getFilms,
  getFilmChars,
  getFilmCharsLoading,
  getFilmsLoading
} from './actions';
import { initialState, reducer } from './reducers';

const useFilmsData = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(getFilmsLoading(true));

    getFilmsApi()
      .then(res => {
        dispatch(getFilms(res.data.results));
      })
      .catch(err => {
        dispatch(getFilmsLoading(false));
        handleError(err);
      });
  }, [props]);

  return [state, dispatch];
};

const useFilmCharacters = (props, state, dispatch) => {
  useEffect(() => {
    if (state.selectedFilm) {
      dispatch(getFilmCharsLoading(true));

      Promise.all(
        state.selectedFilm.characters.map(url =>
          getFilmCharsApi(url).then(res => res.data)
        )
      )
        .then(chars => {
          dispatch(getFilmChars(chars));
        })
        .catch(err => {
          dispatch(getFilmCharsLoading(false));
          handleError(err);
        });
    }
  }, [state.selectedFilm, props, dispatch]);

  return state;
};

export { useFilmsData, useFilmCharacters };
