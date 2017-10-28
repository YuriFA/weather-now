import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { addLocationAndFetchWeather } from './../actions';

const AddLocationForm = ({ dispatch }) => {
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
      <input type="text" className="add-location-input" placeholder="Location name" ref={(node) => { input = node; }} />
      <button type="submit" className="add-location-button">
        <FormattedMessage id="app.location.addLocation" />
      </button>
    </form>
  );
};

export default connect()(AddLocationForm);
