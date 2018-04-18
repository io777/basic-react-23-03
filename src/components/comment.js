import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCommentSelector } from '../selectors'

function Comment({ comment }) {
    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    //from connect
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

const createMapStateToProps = () => {
    const commentSelector = createCommentSelector()

    return (state, ownProps) => ({
        comment: commentSelector(state, ownProps)
    })
}

export default connect(createMapStateToProps)(Comment)