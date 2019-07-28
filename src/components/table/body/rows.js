import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Columns from './columns';

const Rows = ({ rows, cols }) => (
  <Fragment>
    {rows.map((row, index) => (
      <tr key={index}>
        {!!cols.length &&
          cols.map((col, index) => <Columns key={index} col={col} row={row} />)}
      </tr>
    ))}
  </Fragment>
);

Rows.propTypes = {
  cols: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired
};

export default Rows;
