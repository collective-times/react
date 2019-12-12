import { History } from 'history'
import { connectRouter } from 'connected-react-router'
export { RouterState } from 'connected-react-router'

export const createRouterReducer = (history: History) => connectRouter(history)
