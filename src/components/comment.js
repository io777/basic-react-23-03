import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({ user, text }) =>
  <div className="comment">
    <h5 className="comment__user">{user}</h5>
    <p className="comment__text">{text}</p>
  </div>

Comment.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment