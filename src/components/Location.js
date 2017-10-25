import React, { Component } from 'react';

class Location extends Component {
  constructor() {
    super();
    this.sate = {
      data: null,
    };
  }
  render() {
    return (
      <div>{ this.props.name }</div>
    );
  }
}

export default Location;
