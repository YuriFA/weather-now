import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.sate = {
      data: null,
    };
  }
  render() {
    return (
      <header>
        <div className="units-selector">°C | °F</div>
        <div className="language-selector">RU | EN</div>
      </header>
    );
  }
}

export default Header;
