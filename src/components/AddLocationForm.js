import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
      }}
    >
      <input type="text" placeholder="Location name" ref={(node) => { input = node; }} />
      <button type="submit">Add Location</button>
    </form>
  );
};

AddLocationForm.PropTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddLocationForm);
