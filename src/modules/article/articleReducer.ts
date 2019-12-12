import { Article } from "../../entities/article"
import { SET_ARTICLES, ArticleActionTypes } from "./articleAction"

export type ArticleState = {
    articles: Article[]
}

export const initialState: ArticleState = {
    articles: []
}

export const articleReducer = (state: ArticleState = initialState, action: ArticleActionTypes): ArticleState => {
  switch(action.type) {
    case SET_ARTICLES: {
      return {
          ...state,
          articles: state.articles.concat(action.payload.articles)
      }
    }
    default:
      return state
  }
}
