import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'
import { loadCommentsByArticleId } from '../../ac'
import { connect } from 'react-redux'
import { createCommentsSelector, commentsLoadingSelector } from '../../selectors'
import Loader from '../common/loader'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps({ article, isOpen, loadCommentsByArticleId }) {
        if (!this.props.isOpen && isOpen) {
            loadCommentsByArticleId(article.id)
        }
    }

    render() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen} className="test__comment-list--btn">{text}</button>
                <CSSTransition
                    transitionName="comments"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        const { isOpen, comments, article, loading } = this.props
        if (!isOpen) return null

        if (loading) return <Loader />

        return (
            <div className="test__comment-list--body">
                {
                    comments.length
                        ? this.getComments()
                        : <h3 className="test__comment-list--empty">No comments yet</h3>
                }
                <CommentForm articleId={article.id} />
            </div>
        )
    }

    getComments() {
        return (
            <ul>
                {
                    this.props.comments.map(comment =>
                        <li key={comment.id} className="test__comment-list--item">
                            <Comment id={comment.id} />
                        </li>)
                }
            </ul>
        )
    }
}

export default connect(state => {
    return {
        comments: createCommentsSelector(state),
        loading: commentsLoadingSelector(state)
    }
}, { loadCommentsByArticleId })(toggleOpen(CommentList))