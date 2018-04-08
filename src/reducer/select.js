import { SELECT_ARTICLE } from '../constants'

export default (selectedState = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SELECT_ARTICLE:
            return payload.selected
        default:
            return selectedState
    }
}