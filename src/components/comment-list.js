import React, { Component } from 'react'
import Comment from './comment'
import PropTypes from 'prop-types'
import toggle from '../decorators/toggle';

class CommentList extends Component {
  render() {
    const { comments, showItem, visibleItem } = this.props
    return (
      <ul>
        {(comments === undefined || comments.length === 0) ?
          <p>Комментарии отсутствуют</p> :
          <div>
            <h4>Комментарии {comments.length}</h4>
            <button onClick={() => visibleItem()}>{showItem ? 'close' : 'open'}</button>
            {this.getComments()}
          </div>
        }
      </ul>
    )
  }

  getComments() {
    const { comments, showItem } = this.props

    if(!showItem) return null

    return comments.map(comment =>
      <li key={comment.id}>
        <Comment {...comment}
        />
      </li>
    )
  }
}


CommentList.propTypes = {
  comments: PropTypes.array,
  showItem: PropTypes.bool,
  visibleItem: PropTypes.func
}

export default toggle(CommentList)