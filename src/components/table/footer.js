import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ cols, msg = [] }) => (
  <tfoot>
    {msg.map((note, index) => (
      <tr key={index}>
        {!!cols.length && (
          <td
            colSpan={cols.length}
            className="fw6 bb b--black-20 tl pv2 ph3 bg-white"
          >
            {note}
          </td>
        )}
      </tr>
    ))}
  </tfoot>
);

Footer.propTypes = {
  msg: PropTypes.array,
  cols: PropTypes.array.isRequired
};

export default Footer;
