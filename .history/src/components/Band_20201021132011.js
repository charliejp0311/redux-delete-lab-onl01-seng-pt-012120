import React, { Component } from 'react';

class Band extends Component {
  handleClick = event => {
    this.props.deleteBand(this.props.id)
  }
  render() {
    console.log(this.props.band)
    return (
      <div>
        <li>{this.props.band}</li>
        <button onClick={this.handleClick}>DELETE</button>
      </div>
    )
    
  }
};

export default Band;
