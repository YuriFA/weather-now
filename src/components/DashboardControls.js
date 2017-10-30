import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { refreshAllLocations, addLocationByGeo } from './../actions';
import AddLocationForm from './AddLocationForm';

const DashboardControls = ({ onUpdateAllClick, onAddYourLocationClick }) => (
  <div className="dashboard-contorls">
    <AddLocationForm />
    <button className="dashboard-contorls-button update-all-button" onClick={onUpdateAllClick}>
      <FormattedMessage id="app.dashboard.updateAll" />
    </button>
    <button className="dashboard-contorls-button add-your-location" onClick={onAddYourLocationClick}>
      <FormattedMessage id="app.dashboard.addYourLocation" />
    </button>
  </div>
);

export default connect(
  undefined,
  {
    onUpdateAllClick: refreshAllLocations,
    onAddYourLocationClick: addLocationByGeo
  }
)(DashboardControls);
