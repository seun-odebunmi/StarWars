import React from 'react';
import PropTypes from 'prop-types';

import Rows from './rows';
import Columns from './columns';

const Body = ({ columns, rows }) => (
  <tbody>
    {rows.map((row, index) => (
      <Rows key={index}>
        {columns.map((col, colInd) => (
          <Columns key={colInd}>{row[col]}</Columns>
        ))}
      </Rows>
    ))}
  </tbody>
);

Body.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      height: PropTypes.string,
      mass: PropTypes.string,
      hair_color: PropTypes.string,
      skin_color: PropTypes.string,
      eye_color: PropTypes.string,
      birth_year: PropTypes.string,
      gender: PropTypes.string,
      homeworld: PropTypes.string,
      films: PropTypes.arrayOf(PropTypes.string),
      starships: PropTypes.arrayOf(PropTypes.string),
      vehicles: PropTypes.arrayOf(PropTypes.string),
      species: PropTypes.arrayOf(PropTypes.string),
      created: PropTypes.string,
      edited: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired
};

export default Body;
