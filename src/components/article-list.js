import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import Article from './article'
import accordion from '../decorators/accordion'
import CommentList from './comment-list'

class ArticleList extends Component {
    render() {
        return (
            <ul>
                {this.getArticles()}
            </ul>
        )
    }

    getArticles() {
        const { articles, openItemId, toggleItem } = this.props
        return articles.map(article => (
            <li key = {article.id}>
                <Article article = {article}
                         isOpen = {article.id === openItemId}
                         toggleOpen = {toggleItem}
                         ref = {this.setListElementRef}
                />
                <CommentList comments = {article.comments}
                             id = {article.id}
                />
            </li>
        ))
    }

    setListElementRef = listElement => {
        console.log('---', listElement, findDOMNode(listElement))
    }
}

export default accordion(ArticleList)