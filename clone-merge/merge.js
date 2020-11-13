function merge(primarySource, secondarySource) {
    return {...secondarySource, ...primarySource};
}

module.exports = merge;