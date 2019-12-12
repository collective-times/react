import * as React from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Article } from "../../../entities/article"
import { ArticleList } from "../../templates/ArticleList"

type Props = {
    articles: Article[]
    onLoadMore: (value: number) => void
}

export const Dashboard: React.FC<Props> = ({
    articles,
    onLoadMore
}) => {
console.log(articles)

  return (
        <>
            <InfiniteScroll
                pageStart={1}
                initialLoad={false}
                loadMore={onLoadMore}
                hasMore={true}
                threshold={250}
                loader={<div><CircularProgress /></div>}>

                <ArticleList articles={articles} />

            </InfiniteScroll>
        </>
    )
}