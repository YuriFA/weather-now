import React, { Component } from 'react';

const Location = ({
  name,
  temperature
}) => (
  <div className="location">
    <div className="location__name">{ name }</div>
    <div className="location__temperature">{ temperature }˚</div>
  </div>
);

export default Location;
