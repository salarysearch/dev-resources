const normalize = require('../../utils/normalize-strings')

module.exports = function (resourcesList) {
    const resourcesByCategory = {}

    resourcesList.forEach((resource) => {
        resource.categories.forEach((category) => {
            const normalizedCategoryName = normalize.url(category)

            if (resourcesByCategory[normalizedCategoryName]) {
                resourcesByCategory[normalizedCategoryName].push(resource)
            } else {
                resourcesByCategory[normalizedCategoryName] = [resource]
            }
        })
    })

    return resourcesByCategory
}
