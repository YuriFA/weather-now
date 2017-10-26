import React, { Component } from 'react';

const Selector = ({
  className,
  options,
}) => (
  <select className={className}>
    {options.map((opt, i) =>
      <option key={i} value={opt}>{opt}</option>
    )}
  </select>
);

export default Selector;
