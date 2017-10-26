import React, { Component } from 'react';
import { connect } from 'react-redux';

import Location from './Location';

const LocationList = ({ locations }) => (
  <div className="location-list">
    {Object.keys(locations).map(id => (
      <Location
        key={id}
        {...locations[id]}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  locations: state
});

export default connect(mapStateToProps)(LocationList);
