import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../dropdown';
import './movieList.scss';

const MovieList = ({ list, onFilmChange }) => (
  <div className="mov-container">
    <Dropdown
      options={list}
      onChange={e => onFilmChange(Number(e.target.value))}
    />
  </div>
);

MovieList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      episode_id: PropTypes.number,
      opening_crawl: PropTypes.string,
      director: PropTypes.string,
      producer: PropTypes.string,
      release_date: PropTypes.string,
      characters: PropTypes.arrayOf(PropTypes.string),
      planets: PropTypes.arrayOf(PropTypes.string),
      starships: PropTypes.arrayOf(PropTypes.string),
      vehicles: PropTypes.arrayOf(PropTypes.string),
      species: PropTypes.arrayOf(PropTypes.string),
      created: PropTypes.string,
      edited: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired,
  onFilmChange: PropTypes.func.isRequired
};

export default MovieList;
