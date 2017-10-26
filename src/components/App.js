import React, { Component } from 'react';
// import styled from 'styled-components';

import Header from './Header';
import WeatherDashboard from './WeatherDashboard';
import AddLocationForm from './AddLocationForm';

const App = () => (
  <div>
    <Header />
    <AddLocationForm />
    <WeatherDashboard />
  </div>
);

export default App;
