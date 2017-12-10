/**
 * 2017-12-10 Jifeng Cheng
 * 构建CommentApp的子组件CommentInput
 */

import React from 'react';

class CommentInput extends React.Component {
  constructor () {
    super()
    this.state={
      username: '',
      content: ''
    }
  }
  // 使input和Textarea成为受控组件
  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }

  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }

  // 为Button添加提交事件
  handleSubmit () {
    if(this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content
      })
    }
    this.setState({ content: '' })
  }
  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button
            onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput

