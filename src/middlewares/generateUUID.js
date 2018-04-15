import { ADD_COMMENT } from '../constants'
import uuid from 'uuid/v4'

export default store => next => action => {

    if (action.type !== ADD_COMMENT) {
        return next(action)
    }

    const comment = {
        ...action.payload.comment,
        id: uuid()
    }

    return next({ ...action, payload: { ...action.payload, comment } })

}