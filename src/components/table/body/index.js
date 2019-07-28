import React from 'react';
import Rows from './rows';

const Body = props => (
  <tbody className="lh-copy">
    <Rows {...props} />
  </tbody>
);

export default Body;
