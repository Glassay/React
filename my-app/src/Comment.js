/**
 * 2017-12-10 Jifeng Cheng
 * 让Comment负责具体每条评论的渲染
 */

import React from 'react';

class Comment extends React.Component {
  render () {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username}：</span>
        </div>
        <p>{this.props.comment.content}</p>
      </div>
    )
  }
}

export default Comment