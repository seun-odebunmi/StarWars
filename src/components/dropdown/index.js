import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, onChange, className = '' }) => (
  <select onChange={onChange} className={`ba b--white w-100 pa1 ${className}`}>
    <option value="">-- Select --</option>
    {options.map(({ name, value }, index) => (
      <option key={index} value={value}>
        {name}
      </option>
    ))}
  </select>
);

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default Dropdown;
