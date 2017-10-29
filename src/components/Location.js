import React, { Component } from 'react';

import LocationControls from './LocationControls';
import WeatherData from './WeatherData';

const Location = props => (
  <div className="location">
    <div className="location__name">
      <span className="location__city">{props.name}</span>
      <span className="location__country">{props.country ? `, ${props.country.toUpperCase()}` : ''}</span>
    </div>
    <WeatherData {...props} />
    <LocationControls onRefreshClick={props.onRefreshClick} onRemoveClick={props.onRemoveClick} />
  </div>
);

export default Location;
