import { createSelector } from 'reselect'

export const articlesLoadingSelector = state => state.articles.loading
export const articlesMapSelector = state => state.articles.entities
export const articleListSelector = createSelector(articlesMapSelector, articlesMap => articlesMap.valueSeq().toJS())

export const commentsLoadingSelector = state => state.comments.loading
export const commentsMapSelector = state => state.comments.entities
export const commentListSelector = createSelector(commentsMapSelector, commentsMap => commentsMap.valueSeq().toJS())

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

export const createCommentSelector = () => createSelector(commentsMapSelector, idSelector, (comments, id) => {
    return comments.toJS()[id]
})

export const createCommentsSelector = createSelector(commentListSelector, comments => {
    return Object.values(comments)
})