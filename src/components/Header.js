import React, { Component } from 'react';

import Logo from './Logo';
import Selector from './Selector';

const Header = () => (
  <header>
    <Logo />
    <div className="settings-container">
      <Selector className="language-selector" options={['RU', 'EN']} />
    </div>
  </header>
);

export default Header;
