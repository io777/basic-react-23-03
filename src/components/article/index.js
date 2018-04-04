import React, { PureComponent } from 'react'
import CommentList from '../comment-list/index'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'

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
                <button className = "test--article__btn"
                        onClick = {() => toggleOpen(article.id)}
                >
                    {isOpen ? 'close' : 'open'}
                </button>
                <CSSTransition
                    transitionName = "article"
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                    transitionAppearTimeout = {1000}
                    transitionAppear
                >
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        const { article, isOpen } = this.props
        if (this.state.error) return <h2>Some error</h2>
        if (!isOpen) return null

        return (
            <section className = "test--article__body">
                {article.text}
                <CommentList comments={article.comments}/>
            </section>
        )
    }
}

export default Article