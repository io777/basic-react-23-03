import { INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE, RANGE_ARTICLE } from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectArticle(selected) {
    return {
        type: SELECT_ARTICLE,
        payload: { selected }
    }
}

export function rangeArticle(dataRange) {
    return {
        type: RANGE_ARTICLE,
        payload: { ...dataRange }
    }
}