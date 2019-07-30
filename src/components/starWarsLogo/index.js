import React from 'react';
import PropTypes from 'prop-types';

const StarWarsLogo = ({ logoUrl }) => (
  <div className="w-75">
    <img src={logoUrl} alt="StarWars" />
  </div>
);

StarWarsLogo.propTypes = {
  logoUrl: PropTypes.string.isRequired
};

export default StarWarsLogo;
