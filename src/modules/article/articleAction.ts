import { Article } from "../../entities/article"

export const FETCH_ARTICLES = "FETCH_ARTICLES"
export const SET_ARTICLES = "SET_ARTICLES"

export type FetchArticlesAction = {
  type: typeof FETCH_ARTICLES
  payload: {
    pageNumber: number
  }
}

export function fetchArticles(pageNumber: number): FetchArticlesAction {
  return {
    type: FETCH_ARTICLES,
    payload: {
      pageNumber
    }
  }
}

export type SetArticlesAction = {
  type: typeof SET_ARTICLES
  payload: {
    articles: Article[]
  }
}

export function setArticles(articles: Article[]): SetArticlesAction {
  return {
    type: SET_ARTICLES,
    payload: {
      articles
    }
  }
}

export type ArticleActionTypes =
  | FetchArticlesAction
  | SetArticlesAction
