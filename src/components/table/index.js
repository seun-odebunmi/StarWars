import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Body from './body';
import Footer from './footer';

import './table.scss';

const Table = ({ rows, sortHeader, columns, total }) => (
  <div className="table-container">
    <table>
      <Header columns={columns} sortHeader={sortHeader} />
      <Body columns={columns} rows={rows} />
      <Footer colSpan={columns.length} total={total} />
    </table>
  </div>
);

Table.propTypes = {
  sortHeader: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  total: PropTypes.shape({
    chars: PropTypes.number.isRequired,
    height: PropTypes.string.isRequired
  }).isRequired,
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

export default Table;
