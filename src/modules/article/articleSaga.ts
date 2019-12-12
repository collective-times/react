import { fork, call, put, take } from 'redux-saga/effects'

import { Article } from "../../entities/article"
import { collectiveTimesRepository } from "../../repositories/collectiveTimesRepository"
import {
    FETCH_ARTICLES,
    FetchArticlesAction,
    setArticles
} from "./articleAction"

export function* handleFetchArticles() {
    while (true) {
        const action: FetchArticlesAction = yield take(FETCH_ARTICLES)
        try {
            const articles: Article[] = yield call(collectiveTimesRepository.findArticles, action.payload.pageNumber)
            yield put(setArticles(articles))
        } catch (e) {
            console.log(e)
        }
    }
}

export function* articleProcess() {
    yield fork(handleFetchArticles)
}
