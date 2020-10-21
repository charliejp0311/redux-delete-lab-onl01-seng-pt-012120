import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <p>{this.props.band.name}</p>
      </div>
    );
  }
};

export default Band;
