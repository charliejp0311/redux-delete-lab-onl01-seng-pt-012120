import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.band.bandName}
        <button onClick={()=>this.props.delete(this.props.text.id)}>DELETE</button>
        </li>
      </div>
    );
  }
};

export default Band;
