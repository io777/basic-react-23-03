import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentList from '../comment-list'
import CSSTransition from 'react-addons-css-transition-group'
import { deleteArticle } from '../../ac'
import './style.css'
import { createArticleSelector } from '../../selectors'

class Article extends PureComponent {
    state = {
        error: null
    }

    componentDidCatch(error) {
        console.log('---', 'some error', error)
        this.setState({ error })
    }

    render() {
        const { article, isOpen, toggleOpen } = this.props
        return (
            <div>
                <h2>{article.title}</h2>
                <button className="test--article__btn"
                    onClick={() => toggleOpen(article.id)}
                >
                    {isOpen ? 'close' : 'open'}
                </button>
                <button onClick={this.handleDelete}>delete me</button>
                <CSSTransition
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppearTimeout={1000}
                    transitionAppear
                    component='div'
                >
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    handleDelete = () => {
        const { deleteArticle, article } = this.props
        deleteArticle(article.id)
    }

    getBody() {
        const { article, isOpen } = this.props
        if (this.state.error) return <h2>Some error</h2>
        if (!isOpen) return null

        return (
            <section className="test--article__body">
                {article.text}
                <CommentList articleId={article.id} comments={article.comments} />
            </section>
        )
    }
}

Article.propTypes = {
    id: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string
    }).isRequired,
    toggleOpen: PropTypes.func,
    deleteArticle: PropTypes.func
}

const createMapStateProps = () => {
    const articleSelector = createArticleSelector()

    return (state, ownProps) => ({
        article: articleSelector(state, ownProps)
    })
}

export default connect(createMapStateProps, { deleteArticle })(Article)