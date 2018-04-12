import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'

const defaultArticles = normalizedArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action
    console.log(payload)
    switch (type) {
        case DELETE_ARTICLE:
            const { [payload.id]: deletedArticle, ...restArticle } = articlesState
            return restArticle
        default:
            return articlesState
    }
}