import React from 'react';
import CounterStore from '../store/CounterStore';
import actionCreator from '../actionCreator';

const buttonStyle = {
  margin: '10px'
}

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    const { caption } = this.props;
    this.state = {
      value: CounterStore.getCounterValue(caption)
    }
  }
  onHandleClickChange = (isIncrement) => {
    const { caption } = this.props;
    console.log('caption', caption);
    if(isIncrement) {
      actionCreator.increment(caption)
    } else {
      actionCreator.decrement(caption)
    }
  }
  onCounterUpdate = () => {
    const { caption } = this.props;
    this.setState({
      value: CounterStore.getCounterValue(caption)
    })
  }
  componentDidMount() {
    CounterStore.onChange(this.onCounterUpdate)
  }
  render() {
    const { caption } = this.props;
    return(
      <div>
        <input style={buttonStyle} type="button" value="+" onClick={this.onHandleClickChange.bind(this, true)} />
        <input style={buttonStyle} type="button" value="-" onClick={this.onHandleClickChange.bind(this, false)} />
        <span>{ caption } Count: { this.state.value}</span>
      </div>
    );
  }
}
