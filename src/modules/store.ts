import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

import { createRootReducer } from './reducers'
import { rootSaga } from './saga'

const sagaMiddleware = createSagaMiddleware()

export const history = createBrowserHistory()
export const configureStore = (preloadedState?: any) => {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware
            ),
        ),
    )
    sagaMiddleware.run(rootSaga)

    return store
}
