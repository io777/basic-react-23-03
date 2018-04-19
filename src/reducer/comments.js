import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, LOAD_ALL_COMMENTS, START } from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerRecord = Record({
    entities: new OrderedMap({}),
    loading: false,
    loaded: false,
    error: null,
    total: null
})

export default (state = new ReducerRecord(), action) => {
    const { type, payload, randomId, response } = action

    console.log('+++++', 'reducerResponse', response)

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({
                ...payload.comment,
                id: randomId
            }))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_ALL_COMMENTS + START:
            return state.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return state
                .set('entities', arrToMap(response.records, CommentRecord))
                .set('loading', false)
                .set('loaded', true)
                .set('total', response.total)

        default:
            return state
    }
}