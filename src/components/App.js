import React, { Component } from 'react';

import Header from './Header';
import WeatherDashboard from './WeatherDashboard';
import DashboardControls from './DashboardControls';

const App = () => (
  <div>
    <Header />
    <DashboardControls />
    <WeatherDashboard />
  </div>
);

export default App;
