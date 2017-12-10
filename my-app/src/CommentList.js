/**
 * 2017-12-10 Jifeng Cheng
 * 构建CommentApp的另一个子组件CommentList
 */

import React from 'react';
import Comment from './Comment'

class CommentList extends React.Component {
  static defaultProps = {
    comments: []
  }
  render () {
    return (
      <div>
        {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
      </div>
    )
  }
}

export default CommentList

