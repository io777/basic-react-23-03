import { RANGE_ARTICLE } from '../constants'
import defaultState from '../fixtures'

export default (dateRange = defaultState.dateRange, action) => {
    const { type, payload } = action
    switch (type) {
        case RANGE_ARTICLE:
            return payload
        default:
            return dateRange
    }
}