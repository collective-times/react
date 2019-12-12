import { get } from "./httpRequest"

import { Article } from "../entities/article"

interface CollectiveTimesRepository {
    findArticles: (page?: number) => Promise<Article[]>
}

export const collectiveTimesRepository: CollectiveTimesRepository = {
    findArticles: async (page?: number) => {
        const pageNumber = (page === null) ? 1 : page

        return await get("/v1/articles", { page: pageNumber })
            .then(res => res.data)
            .then(res => {
                return res.articles.map((result: any) => {
                    return {
                        id: result.key,
                        title: result.title,
                        description: result.description,
                        articleUrl: result.articleUrl,
                        imageUrl: result.imageUrl
                    }
                })
            })
    }
}
