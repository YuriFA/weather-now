import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';

import { addLocationAndFetchWeather } from './../actions';

const AddLocationForm = ({ dispatch, intl }) => {
  let input;

  return (
    <form
      className="add-location-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addLocationAndFetchWeather(input.value));
        input.value = '';
      }}
    >
      <input
        type="text"
        className="add-location-input"
        placeholder={intl.formatMessage({ id: 'app.location.locationName' })}
        ref={(node) => { input = node; }}
      />
      <button type="submit" className="dashboard-contorls-button add-location-button">
        <FormattedMessage id="app.location.addLocation" />
      </button>
    </form>
  );
};

export default connect()(injectIntl(AddLocationForm));
