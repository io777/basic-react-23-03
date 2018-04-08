import { SELECT_ARTICLE } from '../constants'
import defaultState from '../fixtures'

export default (selectedState = defaultState.selectedArticle, action) => {
    const { type, payload } = action
    switch (type) {
        case SELECT_ARTICLE:
            return payload.selected
        default:
            return selectedState
    }
}