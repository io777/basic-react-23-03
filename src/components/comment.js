import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Comment extends PureComponent {
  render() {
    const { comment } = this.props;
    return (
      <div className="comment">
        <h5 className="comment__user">{comment.user}</h5>
        <p className="comment__text">{comment.text}</p>
      </div>
    )
  }
}

Comment.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment