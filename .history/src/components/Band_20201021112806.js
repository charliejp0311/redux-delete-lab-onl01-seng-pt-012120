import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log(this.props)
    return(
      <div>
        <p>{props.band.name}</p>
      </div>
    );
  }
};

export default Band;
