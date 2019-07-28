import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../dropdown';

const MovieList = ({ films, onFilmChange }) => {
  const options = films.map(({ title, episode_id }) => ({
    name: title,
    value: episode_id
  }));

  return (
    <Dropdown
      options={options}
      onChange={e => onFilmChange(Number(e.target.value))}
    />
  );
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  onFilmChange: PropTypes.func.isRequired
};

export default MovieList;
