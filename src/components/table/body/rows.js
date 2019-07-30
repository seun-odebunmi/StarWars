import React from 'react';
import PropTypes from 'prop-types';

const Rows = ({ children }) => <tr>{children}</tr>;

Rows.propTypes = {
  children: PropTypes.node.isRequired
};

export default Rows;
