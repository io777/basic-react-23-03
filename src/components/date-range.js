import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import moment from 'moment'

export default class DateRange extends Component {
  state = {
    from: null,
    to: null
  }

  getFromDate = (from) => this.setState({ from })

  getToDate = (to) => this.setState({ to })

  getDiff() {
    if(this.state.from && this.state.to) {
      let dateFrom = moment(this.state.from)
      let dateTo = moment(this.state.to)

      return dateTo.diff(dateFrom, 'days')
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="date-range">
        <DayPickerInput onDayChange={day => this.getFromDate(day)}
                        placeholder="From"
        />
        -
        <DayPickerInput onDayChange={day => this.getToDate(day)}
                        placeholder="To"
        />
        <span>Разница {this.getDiff()}</span>
      </div>
    )
  }
}