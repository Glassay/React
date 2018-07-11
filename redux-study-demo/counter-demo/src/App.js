import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Summary from './Components/Summary';

class App extends Component {
  constructor(props) {
    super(props);
    this.initValue = {
      'first': 1,
      'second': 2,
      'third': 3
    }
    this.state = {
      sum: this.getTotalCounterValue()
    }
  }

  getTotalCounterValue = () => {
    let total = 0;
    for(let key in this.initValue) {
      if(this.initValue.hasOwnProperty(key)) {
        total+=this.initValue[key]
      }
    }
    return total;
  }

  onCounterUpdate = (curValue, preValue) => {
    const diff = curValue - preValue;
    this.setState({
      sum: this.state.sum + diff
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Counter caption="first" value={this.initValue['first']} onCounterUpdate={this.onCounterUpdate} />
          <Counter caption="second" value={this.initValue['second']} onCounterUpdate={this.onCounterUpdate} />
          <Counter caption="third" value={this.initValue['third']} onCounterUpdate={this.onCounterUpdate} />
          <Summary sum={this.state.sum} />
        </div>
      </div>
    );
  }
}

export default App;
