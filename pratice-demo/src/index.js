/**
 * 2017-12-07 Jifeng Cheng
 */

import React from 'react';
import reactDOM from 'react-dom';

class Content extends React.Component {
  constructor () {
    super()
    this.state = { isLike: false, isName: false }
  }

  handleClickLikeButton () {
    this.setState({
      isLike: !this.state.isLike
    })
  }
  handleClickOnTitle1 () {
    this.setState({
      isName: !this.state.isName 
    })
  }
  // setState传递参数的实现
  handleClickParam () {
    this.setState((preState) => {
      return { count: 0 }
    })
    this.setState((preState) => {
      return { count: preState.count + 1 }
    })
    this.setState((preState) => {
      return { count: preState.count + 1 }
    })
  }
  
  handleClickOnTitle2 (e) {
    console.log(this)
  }
  render() {
    const content = 'Sara'
    const className = 'header'
    const isGood = false
    const title = <h1 className='title'>ScriptOJ</h1>
    const page = <div className='content'></div>

    return(
      <div>
        <h1 onClick={this.handleClickOnTitle1.bind(this)}>hello,{this.state.isName ? 'Sara' : 'Susan'}</h1>

        <h1 onClick={this.handleClickOnTitle2.bind(this, 'hello')}>hello,{content}</h1>

        <h1>1+2={1+2}</h1>

        <h1 onClick={this.handleClickParam.bind(this)}>count: {this.state.count}</h1>

        <h1>{(
          function() {
            return content
          }
          )()}
        </h1>

        <h1>
          hello,{
            isGood ? 'Sara' : 'Tina'
          }
        </h1>

        <button onClick={this.handleClickLikeButton.bind(this)}>
          {this.state.isLike ? '取消' : '点赞'}
        </button>
      </div>
    )
  }
}

reactDOM.render(
  <Content />,
  document.getElementById('root')
)