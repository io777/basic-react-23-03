import React from 'react'
import Comment from './comment'
import PropTypes from 'prop-types'

const CommentList = ({ comments }) =>
  <div className="comment-list">
    {(comments === undefined || comments.length === 0) ?
      <p>Комментарии отсутствуют</p> :
      <div>
        <h4>Комментарии {comments.length}</h4>
        {comments.map(comment =>
          <Comment key={comment.id}
                   {...comment}
          />
        )}
      </div>
    }
  </div>

CommentList.propTypes = {
  comments: PropTypes.array,
}

export default CommentList