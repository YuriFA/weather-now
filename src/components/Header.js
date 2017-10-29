import React, { Component } from 'react';

import Logo from './Logo';
import SwitchLocale from './SwitchLocale';

const Header = () => (
  <header>
    <Logo />
    <div className="settings-container">
      <SwitchLocale className="language-selector" />
    </div>
  </header>
);

export default Header;
