import { ArticleState } from "./articleReducer"

// Memo
// anyは型としてあまりよくないものの
// combainereducersによって合成されているため必要なものだけを取得
export const getArticles = (state: any) => {
  const articleState = state.article as ArticleState
  return articleState.articles
}
