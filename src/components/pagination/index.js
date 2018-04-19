import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAllComments } from '../../ac'
import './style.css'
import PropTypes from 'prop-types'

class Pagination extends Component {

    static propTypes = {
        limit: PropTypes.number,
        offset: PropTypes.number,
        loadAllComments: PropTypes.func,
        total: PropTypes.number
    }

    handlePageClick = (ev) => {
        const { limit, loadAllComments } = this.props
        const page = ev.currentTarget.value
        const offset = limit * Number(page)

        if (loadAllComments) loadAllComments(limit, offset)

    }

    render() {
        const { limit, total, offset } = this.props
        const page = Math.ceil(total / limit)

        if (total < limit) return null

        return (
            <ul className='pagination'>
                <li>
                    {
                        [...Array(page)].map((x, i) => {
                            return <button onClick={this.handlePageClick} key={i} value={i}>{i + 1}</button>
                        })
                    }
                </li>
            </ul>
        )
    }
}

export default connect(null, { loadAllComments })(Pagination)