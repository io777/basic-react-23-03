import moment from 'moment'

const diffDate = (article, dateRange) => {
    const { from, to } = dateRange
    if (from || to) {
        return moment(article.date).isBetween(from, to)
    }
    return true
}

export default diffDate