import React from 'react';

const OpeningCrawl = ({ text }) => (
  <marquee className="yellow w-75 mb4" direction="up" height="100">
    {text}
  </marquee>
);

export default OpeningCrawl;
