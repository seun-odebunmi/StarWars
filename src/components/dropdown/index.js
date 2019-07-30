import React from 'react';
import PropTypes from 'prop-types';

import './dropdown.scss';

const Dropdown = ({ options, onChange }) => (
  <select onChange={onChange}>
    <option value="">-- Select --</option>
    {options.map(({ name, value }, index) => (
      <option key={index} value={value}>
        {name}
      </option>
    ))}
  </select>
);

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ).isRequired,
  onChange: PropTypes.func
};

export default Dropdown;
