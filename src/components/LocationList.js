import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeLocation, fetchWeather, selectUnits } from './../actions';
import Location from './Location';

const LocationList = ({
  locations,
  onRemoveLocationClick,
  onRefreshLocationClick,
  onSelectUnitsClick
}) => (
  <div className="location-list">
    {Object.keys(locations).map(id => (
      <Location
        key={id}
        {...locations[id]}
        onRemoveClick={() => onRemoveLocationClick(id)}
        onRefreshClick={() => onRefreshLocationClick(id)}
        onSelectUnitsClick={onSelectUnitsClick}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  locations: state.locations
});

export default connect(
  mapStateToProps,
  {
    onRemoveLocationClick: removeLocation,
    onRefreshLocationClick: fetchWeather,
    onSelectUnitsClick: selectUnits
  }
)(LocationList);
