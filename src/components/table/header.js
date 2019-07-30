import React from 'react';
import PropTypes from 'prop-types';

import Rows from './body/rows';

const Header = ({ columns, sortHeader }) => (
  <thead>
    <Rows>
      {columns.map((column, index) => (
        <th key={index} onClick={e => sortHeader(column)}>
          {column}
        </th>
      ))}
    </Rows>
  </thead>
);

Header.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  sortHeader: PropTypes.func.isRequired
};

export default Header;
