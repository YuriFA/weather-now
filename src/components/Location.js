import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

const Location = ({
  id,
  name,
  temperature,
  humidity,
  wind,
  country,
  iconUrl,
  description,
  selectedUnits,
  onRemoveClick,
  onRefreshClick,
  onSelectUnitsClick
}) => (
  <div className="location">
    <div className="location__name">
      <span className="location__city">{ name }</span>
      <span className="location__country">{ country ? `, ${country.toUpperCase()}` : '' }</span>
    </div>
    <div className="weather">
      <div className="weather__icon">
        <img src={iconUrl} alt={description} title={description} />
      </div>
      <div className="temperature">
        <div className="temperature__value">{ temperature }</div>
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
    <div className="location-controls">
      <button className="location-controls__button refresh-location" title="refresh" onClick={onRefreshClick}>
        <i className="fa fa-refresh" aria-hidden="true"></i>
      </button>
      <button className="location-controls__button remove-location" title="remove" onClick={onRemoveClick}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
  </div>
);

export default Location;
