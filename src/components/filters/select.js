import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectArticle } from '../../ac'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        selectArticle: PropTypes.func,
        selected: PropTypes.array
    }

    handleChange = selected => {
        const { selectArticle } = this.props
        selectArticle(selected)
    }

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            onChange={this.handleChange}
            multi
        />
    }
}

export default connect(
    state => ({
        articles: state.articles,
        selected: state.select
    }),
    { selectArticle }
)(SelectFilter)