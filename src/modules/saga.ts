import { all } from 'redux-saga/effects'

import { articleProcess } from "./article"

export function* rootSaga() {
    yield all([
        articleProcess()
    ])
}
