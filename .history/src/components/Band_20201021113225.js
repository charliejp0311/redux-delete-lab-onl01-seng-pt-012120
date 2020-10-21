import React, { Component } from 'react';

class Band extends Component {

  render(props) {
    return(
      <div>
        <li>{props.band.name}</li>
      </div>
    );
  }
};

export default Band;
