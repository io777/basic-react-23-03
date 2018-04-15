import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (commentsState = defaultComments, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            return { ...commentsState, [payload.comment.id]: payload.comment }
        default:
            return commentsState
    }
}