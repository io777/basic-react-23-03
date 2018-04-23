import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'

class ArticlesPage extends Component {
    static propTypes = {

    }

    render() {
        console.log('---', 2)
        return (
            <Switch>
                <Route exact path="/articles" component={ArticleList} />
                <Route path={`${this.props.match.path}/:id`} children={this.getArticle} />
            </Switch>
        )
    }

    getArticle = ({ match }) => {
        if (!match) return <h1>Select an article</h1>
        return <Article id={match.params.id} isOpen key={match.params.id} />
    }
}

export default ArticlesPage