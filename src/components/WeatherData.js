import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

const WeatherData = ({
  id,
  iconUrl,
  description,
  temperature,
  humidity,
  wind,
  selectedUnits,
  onSelectUnitsClick
}) => (
  <div className="weather">
    <div className="weather__icon">
      <img src={iconUrl} alt={description} title={description} />
    </div>
    <div className="temperature">
      <div className="temperature__value">{temperature}</div>
      <div className="temperature__units">
        <button className={`units-button ${selectedUnits === 'celsius' ? 'units-button--active' : ''}`} onClick={() => onSelectUnitsClick(id, 'celsius')}>°C</button>
        {' | '}
        <button className={`units-button ${selectedUnits === 'fahrenheit' ? 'units-button--active' : ''}`} onClick={() => onSelectUnitsClick(id, 'fahrenheit')}>°F</button>
      </div>
    </div>
    <div className="description">
      {description}
    </div>
    <div className="humidity full-row">
      <FormattedMessage id="app.weather.humidity" />
      {`: ${humidity}%`}
    </div>
    <div className="wind full-row">
      <FormattedMessage id="app.weather.wind" />
      {`: ${wind} `}
      <FormattedMessage id="app.weather.wind.units" />
    </div>
  </div>
);

export default injectIntl(WeatherData);
