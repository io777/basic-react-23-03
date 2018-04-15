import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

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
        case ADD_COMMENT:
            const { [payload.articleId]: article } = articlesState
            const { comments } = article
            return { ...articlesState, [payload.articleId]: { ...article, comments: [...comments, payload.comment.id] } }
        default:
            return articlesState
    }
}