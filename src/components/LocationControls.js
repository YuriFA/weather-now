/* eslint-disable react/self-closing-comp */

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

const LocationControls = ({
  intl,
  onRefreshClick,
  onRemoveClick
}) => (
  <div className="location-controls">
    <button className="location-controls__button refresh-location" title={intl.formatMessage({ id: 'app.title.refresh' })} onClick={onRefreshClick}>
      <i className="fa fa-refresh" aria-hidden="true"></i>
    </button>
    <button className="location-controls__button remove-location" title={intl.formatMessage({ id: 'app.title.remove' })} onClick={onRemoveClick}>
      <i className="fa fa-times" aria-hidden="true"></i>
    </button>
  </div>
);

export default injectIntl(LocationControls);
