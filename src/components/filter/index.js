import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../dropdown';

const Filter = ({ label, options, onChange }) => (
  <Fragment>
    <label>{label}</label>
    <Dropdown options={options} onChange={e => onChange(e.target.value)} />
  </Fragment>
);

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  onChange: PropTypes.func.isRequired
};

export default Filter;
