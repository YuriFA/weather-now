import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateIntl, refreshAllLocations } from './../actions';

const SwitchLocale = ({
  className,
  currentLocale,
  locales,
  dispatch
}) => (
  <select
    className={className}
    value={currentLocale}
    onChange={(e) => {
      dispatch(updateIntl({
        locale: e.target.value,
        messages: locales[e.target.value]
      }));
      dispatch(refreshAllLocations());
    }}
  >
    {Object.keys(locales).map(locale =>
      <option key={locale} value={locale}>{locale}</option>
    )}
  </select>
);

const mapStateToProps = state => ({
  currentLocale: state.intl.locale,
  locales: state.locales
});

export default connect(mapStateToProps)(SwitchLocale);
