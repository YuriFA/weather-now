import React, { Component } from 'react';

import Header from './Header';
import WeatherDashboard from './WeatherDashboard';

class App extends Component {
  constructor() {
    super();
    this.sate = {
      data: null,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <WeatherDashboard />
      </div>
    );
  }
}

export default App;
