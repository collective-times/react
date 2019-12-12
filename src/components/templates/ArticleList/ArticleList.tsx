import * as React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';

import { Article } from "../../../entities/article"
import { Article as ArticleComponent } from "../../organisms/article"

type Props = {
    articles: Article[]
}

export const ArticleList: React.FC<Props> = ({ articles }) => {
    const arrayChunk = ([...array], rowSize = 3) => {
        return array.reduce((accumulator, _, currentIndex) => currentIndex % rowSize ? accumulator : [...accumulator, array.slice(currentIndex, currentIndex + rowSize)], []);
    }
    const splitedArticles = arrayChunk(articles)
    const columns = splitedArticles.map((rowArticles: Article[]) => {
         const rows = rowArticles.map((rowArticle) => {
             return(
                 <Grid item xs>
                     <ArticleComponent article={rowArticle}/>
                 </Grid>
             )
         })
         return (
             <Wrapper>
                 <Grid container spacing={5}>
                     {rows}
                 </Grid>
             </Wrapper>
           )
    })
    return (
        <>
            {columns}
        </>
    )
}

const Wrapper = styled.div`
  flexGrow: 1,
`
