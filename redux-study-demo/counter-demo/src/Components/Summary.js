import React, { Component } from 'react';

export default class Summary extends Component {
  render() {
    const { sum } = this.props;
    return (
      <div>
        <hr />
        <div>Total Count: { sum }</div>
      </div>
    );
  }
}
