import React, { Component } from 'react'
//import {findDOMNode} from 'react-dom'
import Article from '../article'
import accordion from '../../decorators/accordion'
import PropTypes from 'prop-types'

export class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array,
        // from accordion decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func,
    }

    componentDidMount() {
        const { fetchData } = this.props
        if (fetchData) fetchData()
    }

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
            <li key = {article.id} className = "test--article-list__item">
                <Article article = {article}
                         isOpen = {article.id === openItemId}
                         toggleOpen = {toggleItem}
                         ref = {this.setListElementRef}
                />
            </li>
        ))
    }

    setListElementRef = _ => {
        //console.log('---', listElement, findDOMNode(listElement))
    }
}

export default accordion(ArticleList)