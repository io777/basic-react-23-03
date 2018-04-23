import { createSelector } from 'reselect'

export const articlesLoadingSelector = state => state.articles.loading
export const articlesMapSelector = state => state.articles.entities
export const articleListSelector = createSelector(articlesMapSelector, articlesMap => articlesMap.valueSeq().toJS())
export const commentMapSelector = state => state.comments.entities
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

export const createCommentSelector = () => createSelector(commentMapSelector, idSelector, (comments, id) => {
    return comments.get(id)
})

export const articleSelector = createSelector(articlesMapSelector, idSelector, (articles, id) => {
    return articles.get(id)
})

export const totalCommentsSelector = state => state.comments.total
export const commentsPagenationSelector = state => state.comments.pagination
export const pageSelector = (_, props) => props.page
export const commentsPageIdsSelector = createSelector(commentsPagenationSelector, pageSelector,
    (pagination, page) => pagination.getIn([page, 'ids'])
)
export const commentsPageLoadingSelector = createSelector(commentsPagenationSelector, pageSelector,
    (pagination, page) => pagination.getIn([page, 'loading'])
)