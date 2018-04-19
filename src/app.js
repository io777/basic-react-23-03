import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import ArticleList from './components/routes/articles'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import CommentsList from './components/routes/comments'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <div><NavLink to="/counter" activeStyle={{ color: 'red' }}>counter</NavLink></div>
                    <div><NavLink to="/filters" activeStyle={{ color: 'red' }}>filters</NavLink></div>
                    <div><NavLink to="/articles" activeStyle={{ color: 'red' }}>articles</NavLink></div>
                    <div><NavLink to="/comments" activeStyle={{ color: 'red' }}>comments</NavLink></div>
                </div>
                <UserForm />

                <Switch>
                    <Route path="/counter" component={Counter} exact />
                    <Route path="/filters" component={Filters} />
                    <Route path="/articles/new" render={() => <h1>New article page</h1>} />
                    <Route path="/articles" component={ArticleList} />
                    <Route path="/comments" component={CommentsList} />
                    <Route path="*" render={() => <h1>Not found page</h1>} />
                </Switch>
            </div>
        )
    }
}

export default App
