const diffArray = (article, selectedArticle) => {
    if (selectedArticle) {
        if (selectedArticle.length === 0) {
            return true
        }

        const newSelectedArticle = selectedArticle.map(element => {
            return element.value
        })
        return newSelectedArticle.includes(article.id)
    }
    return true
}

export default diffArray