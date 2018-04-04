import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import PropTypes from 'prop-types'

class Filters extends Component {
    static propTypes = {
      articles: PropTypes.array
    };

    render() {
        return (
            <div>
                <SelectFilter articles = {this.props.articles}/>
                <DateRange />
            </div>
        )
    }
}

export default Filters