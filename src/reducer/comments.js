import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})

const ReducerRecord = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false
})

export default (state = ReducerRecord(), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], {
                ...payload.comment,
                id: randomId
            })

        case LOAD_ALL_COMMENTS + START:
            return state.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return state
                .set('entities', arrToMap(payload.response, CommentRecord))
                .set('loading', false)
                .set('loaded', true)

        default:
            return state
    }
}