import { DELETE_ARTICLE } from '../constants'
import defaultState from '../fixtures'

export default (articleState = defaultState, action) => {
    const { type, payload } = action
    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== payload.id)
        default:
            return articleState
    }
}