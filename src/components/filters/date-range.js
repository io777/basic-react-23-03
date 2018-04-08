import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { rangeArticle } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    static propTypes = {
        dateRange: PropTypes.shape({
            from: PropTypes.date,
            to: PropTypes.date
        }),
        rangeArticle: PropTypes.func
    }

    handleDayClick = (day) => {
        const { rangeArticle, dateRange } = this.props
        rangeArticle(DateUtils.addDayToRange(day, dateRange))
    }

    render() {
        const { dateRange } = this.props
        const { from, to } = dateRange
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
                    onDayClick={this.handleDayClick}
                />
                {selectedRange}
            </div>
        )
    }
}

export default connect(
    state => ({
        dateRange: state.dateRange
    }), { rangeArticle }
)(DateRange)