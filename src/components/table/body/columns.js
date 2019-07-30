import React from 'react';
import PropTypes from 'prop-types';

const Columns = ({ children, colSpan }) => (
  <td colSpan={colSpan}>{children}</td>
);

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  colSpan: PropTypes.number
};

export default Columns;
