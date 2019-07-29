import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Body from './body';
import Footer from './footer';

const Table = ({ rows, sortHeader, columns, footerMsg }) => (
  <div className="h5 overflow-auto">
    <table className="collapse ba br2 b--black-10 pv2 ph3 w-100">
      <Header cols={columns} sortHeader={sortHeader} />
      <Body cols={columns} rows={rows} />
      <Footer cols={columns} msg={footerMsg} />
    </table>
  </div>
);

Table.propTypes = {
  rows: PropTypes.array.isRequired,
  sortHeader: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
  footerMsg: PropTypes.array
};

export default Table;
