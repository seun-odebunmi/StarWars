import React from 'react';
import PropTypes from 'prop-types';

import Rows from './body/rows';
import Columns from './body/columns';

const Footer = ({ total, colSpan }) => (
  <tfoot>
    <Rows>
      <Columns colSpan={colSpan}>{`Total Number of Characters: ${
        total.chars
      }`}</Columns>
    </Rows>
    <Rows>
      <Columns colSpan={colSpan}>{`Sum of Character Heights: ${
        total.height
      }`}</Columns>
    </Rows>
  </tfoot>
);

Footer.propTypes = {
  total: PropTypes.shape({
    chars: PropTypes.number.isRequired,
    height: PropTypes.string.isRequired
  }).isRequired,
  colSpan: PropTypes.number.isRequired
};

export default Footer;
