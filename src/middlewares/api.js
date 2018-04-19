import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
    const { callAPI, type, ...rest } = action
    if (!callAPI) return next(action)

    next({ ...rest, type: type + START })

    console.log('++++', 'MiddlewareAction', action)

    //dev only!!!! remove in prod
    setTimeout(() => {
        fetch(callAPI)
            .then(res => res.json())
            .then(response => next({ ...rest, type: type + SUCCESS, response }))
            .catch(error => next({ ...rest, type: type + FAIL, error }))
    }, 1000)
}