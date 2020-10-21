import React, { Component } from 'react';

class Band extends Component {
  handleClick = event => {
    this.props.deleteBand(this.props.id)
  }
  render() {
    return (
      <div>
        <li>{this.props.band}</li>
        <button onClick={this.handleClick}>DELETE</button>
      </div>
    )
    
  }
};

export default Band;
