import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'

export class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button className="test--comments__btn" onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null

        const body = comments.length ? (
            <ul>
                {comments.map(comment =>
                     <li className="test--comment-list__item" key = {comment.id}>
                      <Comment comment = {comment} />
                     </li>)
                }
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
            </div>
        )
    }
}


export default toggleOpen(CommentList)