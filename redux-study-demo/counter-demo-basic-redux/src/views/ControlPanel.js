import React from 'react';
import CounterStore from '../store/CounterStore';
import Counter from './Counter';
import Summary from './Summary';

export default class ControlPanel extends React.Component {
  render() {
    return(
      <div>
        {
          CounterStore.getDataKeys().map(caption => (<Counter key={caption} caption={caption} />))
        }
        <Summary />
      </div>
    );
  }
}
