const templateNames = [
    'home'
]

module.exports = {
    hasTemplate: (slug) => {
        let reducedSlug = slug.replace('/', "");

        const check = templateNames.includes(reducedSlug);
        console.warn(reducedSlug, templateNames, check);
        return check;
    }
}