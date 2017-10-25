import React, { Component } from 'react';

import Location from './Location';

class LocationList extends Component {
  constructor() {
    super();
    this.sate = {
      data: null,
    };
  }
  render() {
    return (
      <div>
        <h3>LocationList</h3>
        <Location name="Moscow" />
        <Location name="Paris" />
        <Location name="Cheboksary" />
        <Location name="London" />
      </div>
    );
  }
}

export default LocationList;
