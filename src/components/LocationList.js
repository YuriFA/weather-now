import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  removeLocation, fetchWeather,
  refreshAllLocations, selectUnits
} from './../actions';
import Location from './Location';

class LocationList extends Component {
  componentDidMount() {
    this.props.refreshAllLocations();
  }

  render() {
    return (
      <div className="location-list">
        {Object.keys(this.props.locations).map(id => (
          <Location
            key={id}
            {...this.props.locations[id]}
            onRemoveClick={() => this.props.onRemoveLocationClick(id)}
            onRefreshClick={() => this.props.onRefreshLocationClick(id)}
            onSelectUnitsClick={this.props.onSelectUnitsClick}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locations: state.locations
});

export default connect(
  mapStateToProps,
  {
    onRemoveLocationClick: removeLocation,
    onRefreshLocationClick: fetchWeather,
    onSelectUnitsClick: selectUnits,
    refreshAllLocations
  }
)(LocationList);
