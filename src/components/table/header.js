import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ cols, sortHeader }) => (
  <thead>
    <tr>
      {!!cols.length &&
        cols.map((column, index) => (
          <th
            key={index}
            onClick={e => sortHeader(column)}
            className="fw6 bb b--black-20 tl pv2 ph3 bg-white pointer"
          >
            {column}
          </th>
        ))}
    </tr>
  </thead>
);

Header.propTypes = {
  cols: PropTypes.array.isRequired,
  sortHeader: PropTypes.func.isRequired
};

export default Header;
