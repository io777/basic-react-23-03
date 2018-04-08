import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'

class Filters extends Component {
    render() {
        return (
            <div>
                <SelectFilter />
                <DateRange />
            </div>
        )
    }
}

export default Filters