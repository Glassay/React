/**
 * 2017-12-07 Jifeng Cheng
 */

import React from 'react';
import reactDOM from 'react-dom';

// *********列表渲染********
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



// ********电脑和显示器*********
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



//*******小数转百分数转换器*******

//输入区域
class Input extends React.Component {
  constructor() {
    super()
  }

  inputChange(event) {
    this.props.valueChange(event.target.value)
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <input
          type='number'
          onChange={this.inputChange.bind(this)}/>
      </div>
    );
  }
}

// 显示区域
class PercentageShower extends React.Component {
  render() {
    return (
      <div>{(this.props.value * 100).toFixed(2) + '%'}</div>
    );
  }
}

// 输入区和显示区整体
class PercentageApp extends React.Component {
  constructor () {
    super()
    this.state = {value: 0}
  }

  valueChange(value) {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div>
        <Input valueChange={this.valueChange.bind(this)} />
        <PercentageShower value={this.state.value} />
      </div>
    );
  }
}

// ********显示或隐藏Header*********
class Header extends React.Component {
  componentWillUnmount() {
    console.log('component will unmount')
  }

  componentWillMount() {
    console.log('component will mount')
  }

  componentDidMount() {
    console.log('component did mount')
  }
  render() {
    return (
      <div>hello</div>
    )
  }
}

class Show extends React.Component {
  constructor() {
    super()
    this.state = {
      isShower: true
    }
  }

  handleHiden() {
    this.setState({
      isShower: !this.state.isShower
    })
  }

  render() {
    return(
      <div>
        {this.state.isShower ? <Header /> : null}
        <button onClick={this.handleHiden.bind(this)}>显示OR隐藏</button>
      </div>
    )
  }
}


// *******点赞组件**********
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
    this.setState((prevState) => {
      return { count: 0 }
    })
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    })
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    })
  }
  
  handleClickOnTitle2 (e) {
    console.log(this)
  }
  render() {
    const content = 'Sara'
    const isGood = false
    
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
        <PercentageApp />
        <Show />
      </div>
    )
  }
}

reactDOM.render(
  <Content />,
  document.getElementById('root')
)