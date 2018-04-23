import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, NavLink, Switch } from 'react-router-dom'
import ArticleList from './components/routes/articles'
import CommentsPage from './components/routes/comments-page'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import Menu, { MenuItem } from './components/menu'

class App extends Component {
    static childContextTypes = {
        username: PropTypes.string,
        store: PropTypes.object
    }

    state = {
        user: ''
    }

    getChildContext() {
        return {
            username: this.state.user
        }
    }

    onUserChange = (user) => this.setState({ user })

    render() {
        console.log('---', 1)
        return (
            <div className="App">
                <Menu>
                    <MenuItem to="/counter">counter</MenuItem>
                    <MenuItem to="/filters">filters</MenuItem>
                    <MenuItem to="/articles">articles</MenuItem>
                    <MenuItem to="/comments">comments</MenuItem>
                </Menu>

                <UserForm value={this.state.user} onChange={this.onUserChange} />

                <Switch>
                    <Redirect exact from="/" to="/articles" />
                    <Route path="/counter" component={Counter} exact />
                    <Route path="/filters" component={Filters} />
                    <Route path="/articles/new" render={() => <h1>New article page</h1>} />
                    <Route path="/articles" component={ArticleList} />
                    <Route path="/comments" component={CommentsPage} />
                    <Route path="*" render={() => <h1>Not found page</h1>} />
                </Switch>
            </div>
        )
    }
}

export default App
