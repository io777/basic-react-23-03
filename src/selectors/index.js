import { createSelector } from 'reselect'

export const articleSelector = state => state.articles
export const articleListSelector = createSelector(articleSelector, articles => Object.values(articles))
export const commentListSelector = state => state.comments
export const filtersSelector = state => state.filters
export const idSelector = (_, props) => props.id

export const filtersSelectionSelector = createSelector(filtersSelector, (filters) => filters.selected)

export const filtratedArticles = createSelector(articleListSelector, filtersSelector, (articles, filters) => {
    const { selected, dateRange: { from, to } } = filters
    console.log('---', 'calculating filtration')
    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const createCommentSelector = () => createSelector(commentListSelector, idSelector, (comments, id) => {
    console.log('---', 'comment selector', id)
    return comments[id]
})

export const createArticleSelector = () => createSelector(articleSelector, idSelector, (articles, id) => {
    console.log('---', 'article selector', id)
    return articles[id]
})