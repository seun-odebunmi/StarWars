import React from 'react';
import PropTypes from 'prop-types';

const OpeningCrawl = ({ text }) => (
  <marquee className="yellow w-100 mb4" direction="up" height="100">
    {text}
  </marquee>
);

OpeningCrawl.propTypes = {
  text: PropTypes.string.isRequired
};

export default OpeningCrawl;
