import React, { Component, Fragment } from 'react'
import Comment from '../comment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadAllComments } from '../../ac'
import { commentsSelector, commentsLoadingSelector, commentsTotalSelector } from '../../selectors'
import Pagination from '../../components/pagination'
import Loader from '../common/loader'

class CommentsPage extends Comment {
    static propTypes = {
        limit: PropTypes.number,
        offset: PropTypes.number,
        loadAllComments: PropTypes.func,
        total: PropTypes.number,
        loading: PropTypes.bool
    }

    state = {
        limit: 5,
        offset: 0
    }

    componentDidMount() {
        const { loadAllComments } = this.props
        const { limit, offset } = this.state

        if (loadAllComments) loadAllComments(limit, offset)
    }

    render() {
        return (
            <Fragment>
                {this.getBody()}
            </Fragment>
        )
    }

    getBody() {
        const { comments } = this.props
        console.log('++++++', 'commentsPage', comments)
        return (
            <div className="test__comment-list--body">
                {
                    comments.length
                        ? this.getComments()
                        : <h3 className="test__comment-list--empty">No comments yet</h3>
                }
            </div>
        )
    }

    getComments() {
        const { comments, total, loading } = this.props
        const { limit, offset } = this.state

        if (loading) return <Loader />

        return (
            <Fragment>
                <ul>
                    {
                        comments.map(comment =>
                            <li key={comment.id} className="test__comment-list--item">
                                <Comment id={comment.id} />
                            </li>)
                    }
                </ul>
                <Pagination total={total} limit={limit} offset={offset} />
            </Fragment>
        )
    }
}

export default connect(state => {
    return {
        comments: commentsSelector(state),
        loading: commentsLoadingSelector(state),
        total: commentsTotalSelector(state)
    }
}, { loadAllComments })(CommentsPage)