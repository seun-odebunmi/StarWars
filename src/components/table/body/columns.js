import React from 'react';
import PropTypes from 'prop-types';

const Columns = ({ row, col }) => (
  <td className="pv2 ph3 bb b--black-20 bg-white">{row[col]}</td>
);

Columns.propTypes = {
  col: PropTypes.string.isRequired,
  row: PropTypes.object.isRequired
};

export default Columns;
