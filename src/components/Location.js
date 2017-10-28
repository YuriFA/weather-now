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
}) => {

  return (
    <div className="location">
      <div className="location__name">
        <span className="location__city">{ name }</span>
        <span className="location__country">{ country ? `, ${country.toUpperCase()}` : '' }</span>
      </div>
      <div className="weather">
        <div className="weather__icon">
          <img src={iconUrl} alt={description} />
        </div>
        <div className="temperature">
          <div className="temperature__value">{ temperature }</div>
          <div className="temperature__units">
            <button className={`units-button ${selectedUnits === 'celsius' ? 'units-button--active' : ''}`} onClick={() => onSelectUnitsClick(id, 'celsius')}>°C</button>
            {' | '}
            <button className={`units-button ${selectedUnits === 'fahrenheit' ? 'units-button--active' : ''}`} onClick={() => onSelectUnitsClick(id, 'fahrenheit')}>°F</button>
          </div>
        </div>
        <div className="humidity">
          <FormattedMessage id="app.weather.humidity" />
          {`: ${humidity}%`}
        </div>
        <div className="wind">
          <FormattedMessage id="app.weather.wind" />
          {`: ${wind} m/s`}
        </div>
      </div>
      <div className="location-controls">
        <button className="location-controls__button refresh-location" onClick={onRefreshClick}>
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </button>
        <button className="location-controls__button remove-location" onClick={onRemoveClick}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Location;
