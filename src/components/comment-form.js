import React from 'react'
import PropTypes from 'prop-types'

const CommentForm = () => {
    return (
        <div>
            <form>
                <h5>Add comment</h5>
                <input type="text" />
                <button type="button">add</button>
            </form>
        </div>
    )
}

export default CommentForm