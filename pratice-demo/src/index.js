/**
 * 2017-12-07 Jifeng Cheng
 */

import React from 'react';
import reactDOM from 'react-dom';

const users = [
  { username: 'Jerry', age: 21, gender: 'male'},
  { username: 'Tomy', age: 22, gender: 'male'},
  { username: 'Tian', age: 19, gender: 'female'},
  { username: 'Lucy', age: 20, gender: 'female'}
]

class Index extends React.Component {
  render () {
    return (
      <div>
        {users.map((user) => {
          return (
            <div>
              <div>姓名：{user.username}</div>
              <div>年龄：{user.age}</div>
              <div>性别：{user.gender}</div>
              <hr />
            </div>
          )
        })}
      </div>
    )
  }
}

// 电脑和显示器
class Screen extends React.Component {
  static defaultProps={
    showContent: '无内容'    
  }
  render () {
    return (
      <div className='screen'>{this.props.showContent}</div>
    )
  }
}

class Computer extends React.Component {
  constructor () {
    super()
    this.state = {status: 'off'}
  }
  
  handleClickComputer() {
    this.setState({
      status: (this.state.status === 'off' ? 'on' : 'off')
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.handleClickComputer.bind(this)}>开关{this.state.status}</button>
        <Screen showContent={this.state.status === 'on' ? '显示器亮了' : '显示器关了'} />
      </div>
    )
  }
}

class Content extends React.Component {
  // React.js提供的默认配置组件属性的方式
  static defaultProps={
    liketext: '点赞',
    disliketext: '取消'
  }

  constructor () {
    super()
    this.state = { isLike: false, isName: false, count: null }
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
    const Stitle = <h1 className='title'>ScriptOJ</h1>
    const page = <div className='content'></div>
    
    //让点赞组件具有一定的可配置性
    // const liketext = this.props.liketext || '取消成功'
    // const disliketext = this.props.disliketext || '点赞成功' 

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

        <button liketext='已赞' disliketext='点赞' onClick={this.handleClickLikeButton.bind(this)}>
          {this.state.isLike ? this.props.liketext : this.props.disliketext}
        </button>
        <Computer />
        <Index/>
      </div>
    )
  }
}

reactDOM.render(
  <Content />,
  document.getElementById('root')
)