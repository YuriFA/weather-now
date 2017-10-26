import React, { Component } from 'react';

import Logo from './Logo';
import Selector from './Selector';

const Header = () => (
  <header>
    <Logo />
    <div className="settings-container">
      <Selector className="units-selector" options={['°C', '°F']} />
      <Selector className="language-selector" options={['RU', 'EN']} />
    </div>
  </header>
);

export default Header;
