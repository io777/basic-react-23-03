import { RANGE_ARTICLE } from '../constants'

export default (dateRange = { from: null, to: null }, action) => {
    const { type, payload } = action
    switch (type) {
        case RANGE_ARTICLE:
            return payload
        default:
            return dateRange
    }
}