import React, { Component } from 'react';

import LocationList from './LocationList';

class WeatherDashboard extends Component {
  constructor() {
    super();
    this.sate = {
      data: null,
    };
  }
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <LocationList />
      </div>
    );
  }
}

export default WeatherDashboard;
