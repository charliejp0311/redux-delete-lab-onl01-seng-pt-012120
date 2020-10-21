import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <li>{this.props}</li>
        <button onClick={this.handleClick}>DELETE</button>
      </div>
    )
    
  }
};

export default Band;
