import { combineReducers, Action } from 'redux'
import { History } from 'history'

import { articleReducer } from "./article"
import { createRouterReducer } from "./router"

const isDebug = true
const resetStateActionType = { type: "RESET_STATE_ACTION" }

const createAppReducer = (history: History) => {
    console.log(history)

    return combineReducers({
        article: articleReducer,
        router: createRouterReducer(history)
    })
}

export const createRootReducer = (history: History) => (state: any, action: Action) => {
    if (isDebug) {
        console.log("***** Action *****")
        console.log(action)
        console.log("***** State *****")
        console.log(state)
    }

    if (action.type === resetStateActionType) {
        state = undefined
    }

    return createAppReducer(history)(state, action);
}
