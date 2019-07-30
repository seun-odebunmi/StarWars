import { useEffect, useReducer } from 'react';

import { getFilmsApi, getFilmCharsApi } from '../api/film';
import { handleError } from '../api/';
import { getFilms, getFilmChars, isLoading } from './actions';
import { initialState, reducer } from './reducers';

const useFilmsData = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(isLoading(true));

    getFilmsApi()
      .then(res =>
        res.data.results.map(film => ({
          ...film,
          characters: Promise.all(
            film.characters.map(url =>
              getFilmCharsApi(url).then(res => res.data)
            )
          )
        }))
      )
      .then(res => {
        dispatch(isLoading(false));
        dispatch(getFilms(res));
      })
      .catch(err => {
        dispatch(isLoading(false));
        handleError(err);
      });
  }, [props]);

  return [state, dispatch];
};

const useFilmCharacters = (props, state, dispatch) => {
  useEffect(() => {
    if (state.selectedFilm) {
      dispatch(isLoading(true));

      state.selectedFilm.characters
        .then(chars => {
          dispatch(isLoading(false));
          dispatch(getFilmChars(chars));
        })
        .catch(err => {
          dispatch(isLoading(false));
          handleError(err);
        });
    }
  }, [state.selectedFilm, props, dispatch]);

  return state;
};

export { useFilmsData, useFilmCharacters };
