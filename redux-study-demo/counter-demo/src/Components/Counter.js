import React, { Component } from 'react';

const buttonStyle = {
  margin: '10px'
}

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  handelIncrement = () => {
    const preValue = this.state.value;
    const curValue = this.state.value + 1;
    this.setState({
      value: curValue
    })
    this.props.onCounterUpdate(curValue, preValue);
  }

  handleDecrement = () => {
    const preValue = this.state.value;
    const curValue = this.state.value -1;
    this.setState({
      value: curValue
    })
    this.props.onCounterUpdate(curValue, preValue);
  }

  render() {
    return(
      <div>
        <input style={buttonStyle} type="button" value="+" onClick={this.handelIncrement} />
        <input style={buttonStyle} type="button" value="-" onClick={this.handleDecrement} />
        <span>{ this.props.caption } Count: { this.state.value }</span>
      </div>
    );
  }
}