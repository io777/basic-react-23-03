import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import select from './select'
import dateRange from './range-date'

export default combineReducers({
    counter: counterReducer,
    articles,
    select,
    dateRange
})