/**
 * 2017-12-07 Jifeng Cheng
 */

import React from 'react';
import reactDOM from 'react-dom';

class Content extends React.Component {
  constructor () {
    super()
    this.state = { isLike: false }
  }

  handleClickLikeButton () {
    this.setState({
      isLike: !this.state.isLike
    })
  }
  handleClickOnTitle1 () {
    console.log('Click on title.')
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
        <h1 onClick={this.handleClickOnTitle1}>hello</h1>

        <h1 onClick={this.handleClickOnTitle2.bind(this, 'hello')}>hello,{content}</h1>

        <h1>1+2={1+2}</h1>

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