import React from 'react';
import SummaryStore from '../store/SummaryStore';

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: SummaryStore.getTotalValues()
    }
  }
  onCounterUpdateTotal = () => {
    this.setState({
      value: SummaryStore.getTotalValues()
    })
  }
  componentDidMount() {
    SummaryStore.onChange(this.onCounterUpdateTotal)
  }
  render() {
    const { value } = this.state;
    return(
      <div>
        <hr />
        <div>Total Count: { value }</div>
      </div>
    );
  }
}
