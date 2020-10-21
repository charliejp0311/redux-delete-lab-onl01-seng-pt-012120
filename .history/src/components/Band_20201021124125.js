import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(<li>{this.props.band.bandName}</li>);
  }
};

export default Band;
