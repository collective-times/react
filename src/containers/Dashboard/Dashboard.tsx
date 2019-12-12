import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Dashboard as DashboardComponent } from "../../components/pages/Dashboard"
import { fetchArticles, getArticles } from "../../modules/article"


export const Dashboard = () => {
    const dispatch = useDispatch()

    const articles = useSelector(getArticles)

    useEffect(() => { dispatch(fetchArticles(1)) }, [dispatch])

    const onLoadMore = useCallback(
        (value: number) => {
            dispatch(fetchArticles(value))
        },
        [dispatch],
    )
    
    return (
        <DashboardComponent
            articles={articles}
            onLoadMore={onLoadMore}
        />
    )
}