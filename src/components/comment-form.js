import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../ac'

class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h5>Add comment</h5>
                    <label>User</label>
                    <input name="user" value={this.state.user} onChange={this.handleChange} type="text" />
                    <label>Text</label>
                    <input name="text" value={this.state.text} onChange={this.handleChange} type="text" />
                    <button type="submit">add</button>
                </form>
            </div>
        )
    }

    handleSubmit = ev => {
        const { articleId, addComment } = this.props
        ev.preventDefault()
        addComment({ articleId, comment: this.state })
        this.setState({ user: '', text: '' })
    }

    handleChange = ev => {
        if (ev.target.name === 'user') {
            this.setState({
                user: ev.target.value
            })
        }

        if (ev.target.name === 'text') {
            this.setState({
                text: ev.target.value
            })
        }
    }
}

export default connect(null, { addComment })(CommentForm)